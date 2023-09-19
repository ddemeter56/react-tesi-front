import { useEffect, useState } from 'react';

export function useFetch(uri, options = null) {
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  const env = getEnvironment();
  
  useEffect(() => {
    if(!uri) return;
    fetch(`${env}${uri}`, options)
      .then(data => {
        if (!data.ok) {
          throw new Error(`Network response error: ${data.status} - ${data.statusText}`);
        }
        return data.json()
      })
      .then(setData)
      .then(() => setLoading(false))
      .catch(error => { 
        setError(error)
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri, env]);
  
  return {
    loading,
    data,
    error
  }
}

/** if production fetch api */
export function getEnvironment(isPublicApi) {
  return isPublicApi ? 'https://api.tesi.life/public-api/' : 'https://api.tesi.life/api/'; // if we had mock server
}