// eslint-disable-next-line import/no-anonymous-default-export
export default (objectArray) => {
  return objectArray.map((item) => {
    return {"facility": {"label": item.name, ...item} , ticketPricing: [], opening: {}}
  })
}