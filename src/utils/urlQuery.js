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