const numRows = 4;
const numCols = numRows;
const state = [];

for(let i = 0; i < numRows; i++) {
  state[i] = [];

  for(let j = 0; j < numCols; j++) {
    state[i][j] = Math.round(Math.random());
  }
}

renderState(state);
renderState(determineState(state));
// setTimeout(update, 1000);

/**
 * Returns a new state array based on the current state
 * @param {Array} state
 * @return {Array}
 */
function determineState(state) {
  let newState = [];

  for(let i = 0; i < state.length; i++) {
    newState[i] = [];

    for(let j = 0; j < state[i].length; j++) {
      let cellState = state[i][j];
      let numLiveNeighbours = 0;
      let newCellState;

      let prevRow = getPrevArrayIndex(state, i);
      let nextRow = getNextArrayIndex(state, i);
      let prevCol = getPrevArrayIndex(state[i], j);
      let nextCol = getPrevArrayIndex(state[i], j);

      let rows = [prevRow, i, nextRow];
      let cols = [prevCol, j, nextCol];

      for(let k = 0; k < rows.length; k++) {
        for(let l = 0; l < cols.length; l++) {
          if(state[rows[k]][cols[l]] === 1) {
            numLiveNeighbours++;
          }
        }
      }

      newState[i][j] = getNewState(cellState, numLiveNeighbours);
    }
  }

  return newState;
}

/**
 * Renders the givven state
 * @param {Array} state
 */
function renderState(state) {
  for(let i = 0; i < state.length; i++) {
    for(let j = 0; j < state[i].length; j++) {
      // state[i][j];
    }
  }

  console.log(state[0]);
  console.log(state[1]);
  console.log(state[2]);
  console.log(state[3]);
  console.log(' ');
}

/**
 * Updates the state every x amount of time
 */
function update() {
  let newState = determineState(state);

  renderState(newState);
  setTimeout(update, 1000);
}

/**
 * Returns the new state based on its current state and the number of live neighbours
 * @param {Number} currentState
 * @param {Number} numLiveNeighbours
 * @return {Number}
 */
function getNewState(currentState, numLiveNeighbours) {
  switch(true) {
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

/**
 * Returns the previous or the last array index based on the given index
 * @param {Array} array
 * @param {Number} index
 * @return {Number}
 */
function getPrevArrayIndex(array, index) {
  let prevIndex = index - 1;

  if(prevIndex === -1) {
    prevIndex = array.length - 1;
  }

  return prevIndex;
}

/**
 * Returns the next or the first array index based on the given index
 * @param {Array} array
 * @param {Number} index
 * @return {Number}
 */
function getNextArrayIndex(array, index) {
  let nextIndex = index + 1;

  if(nextIndex === array.length) {
    nextIndex = 0;
  }

  return nextIndex;
}
