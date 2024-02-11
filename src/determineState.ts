import getNextArrayIndex from './utils/getNextArrayIndex';
import getPrevArrayIndex from './utils/getPrevArrayIndex';
import getNewCellState from './getNewCellState';

export default (state: number[][]): number[][] => {
  let newState: number[][] = [];

  for (let i = 0; i < state.length; i++) {
    newState[i] = [];

    for (let j = 0; j < state[i].length; j++) {
      const cellState = state[i][j];
      const prevRow = getPrevArrayIndex(state, i);
      const nextRow = getNextArrayIndex(state, i);
      const prevCol = getPrevArrayIndex(state[i], j);
      const nextCol = getNextArrayIndex(state[i], j);
      const rows = [prevRow, i, nextRow];
      const cols = [prevCol, j, nextCol];
      let numLiveNeighbours = 0;

      for (let k = 0; k < rows.length; k++) {
        for (let l = 0; l < cols.length; l++) {
          if (i === rows[k] && j === cols[l]) {
            continue;
          }

          if (state[rows[k]][cols[l]] === 1) {
            numLiveNeighbours++;
          }
        }
      }

      newState[i][j] = getNewCellState(cellState, numLiveNeighbours);
    }
  }

  return newState;
}