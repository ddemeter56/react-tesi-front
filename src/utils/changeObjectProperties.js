// eslint-disable-next-line import/no-anonymous-default-export
export default (objectArray) => {
  return objectArray.map((item) => {
    return {"label": item.name, ...item} 
  })
}