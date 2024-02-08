/**
 * Returns a new cell state based on its current state and the number of live neighbours
 * @param {Number} currentState
 * @param {Number} numLiveNeighbours
 * @return {Number}
 */
export default (currentState, numLiveNeighbours) => {
  switch (true) {
    case currentState && numLiveNeighbours < 2:
    case currentState && numLiveNeighbours > 3:
      return 0;
    case !currentState && numLiveNeighbours === 3:
      return 1;
    case currentState && (numLiveNeighbours === 2 || numLiveNeighbours === 3):
    default:
      return currentState;
  }
}