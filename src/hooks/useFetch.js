import { useEffect, useState } from 'react';

export function useFetch(uri) {
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState();

  const env = getEnvironment();
  
  useEffect(() => {
    if(!uri) return;
    fetch(`${env}${uri}`)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .then(setError);
  }, [uri, env ]);
  
  return {
    loading,
    data,
    error
  }
}

/** if production fetch api */
export function getEnvironment() {
  return window.location.hostname === 'localhost' ? 'http://localhost/api/' : 'https://api.tesi.life/api/'; // if we had mock server
}