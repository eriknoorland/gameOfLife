/**
 * Returns the next or the first array index based on the given index
 * @param {Array} array
 * @param {Number} index
 * @return {Number}
 */
export default (array, index) => {
  const arrayLength = array.length;

  return (index + 1 + arrayLength) % arrayLength;
}