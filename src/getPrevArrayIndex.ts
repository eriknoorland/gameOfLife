export default (array: unknown[], index: number) => {
  const arrayLength = array.length;

  return (index - 1 + arrayLength) % arrayLength;
}