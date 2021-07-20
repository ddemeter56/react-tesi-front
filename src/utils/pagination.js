export function getNumberOfPages(itemCount, itemsPerPage) {
  return Math.ceil(itemCount / itemsPerPage);
}