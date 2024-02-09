export default (currentState: number, numLiveNeighbours: number) => {
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