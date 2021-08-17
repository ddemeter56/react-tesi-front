/**
 * generate datetime string for input elements: 2017-05-24T10:30"
 */
export function generateDatetimeString() {
  const dateObject = new Date();
  return `${dateObject.getFullYear()}-${dateObject.getMonth() + 1 < 10 ? '0' :  ''}${dateObject.getMonth() + 1}-${dateObject.getDay() < 10 ? '0' :  ''}${dateObject.getDay()}T${dateObject.getHours()}:${dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes()}`
}