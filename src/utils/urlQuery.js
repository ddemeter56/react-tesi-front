
const url = 'https://api.tesi.life/api';
export const encodeQueryData = (data) => {
  const ret = [];
  for (let d in data) {
    if(data[d]) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
    }
        
  }
  return ret.join('&');
}


export const encodeMultipleQueryData = (array, keyName) => {
  if(array.length === 0) {
    return '';
  }
  const codeValues = array.map((item) => item.code);
  return `&${keyName}=${encodeURIComponent(codeValues.join(','))}`;
}

// By design there is no error handling here, because we send back the exact error in response.json, if theres any
export const fetchData = async (service, options) => {
  const response = await fetch(`${url}${service}`, {
    ...options,
    cache: 'no-cache',
  })
  return response.json();
}  