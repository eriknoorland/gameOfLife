const gol = document.getElementById('gol');
const numRows = 50;
const numCols = numRows;

let state = [];
let interval;

/**
 * Start
 */
function start() {
  state = getInitialState();

  renderState(state);

  // renderState(determineState(state));
  interval = setTimeout(update, 250);
}

/**
 * Returns a 'random' initial state
 * @return {Array}
 */
function getInitialState() {
  let state = [];

  for(let i = 0; i < numRows; i++) {
    state[i] = [];

    for(let j = 0; j < numCols; j++) {
      state[i][j] = Math.round(Math.random());
    }
  }

  return state;
}

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
      let nextCol = getNextArrayIndex(state[i], j);

      let rows = [prevRow, i, nextRow];
      let cols = [prevCol, j, nextCol];

      for(let k = 0; k < rows.length; k++) {
        for(let l = 0; l < cols.length; l++) {
          if(state[rows[k]][cols[l]] === 1) {
            numLiveNeighbours++;
          }
        }
      }

      newState[i][j] = getNewCellState(cellState, numLiveNeighbours);
    }
  }

  return newState;
}

/**
 * Renders the given state
 * @param {Array} state
 */
function renderState(state) {
  let content = '';

  for(let i = 0; i < state.length; i++) {
    for(let j = 0; j < state[i].length; j++) {
      content += (state[i][j] + ' ');
    }

    content += '\n';
  }

  gol.innerText = content;
}

/**
 * Updates the state every x amount of time
 */
function update() {
  let newState = determineState(state);

  if(JSON.stringify(newState) === JSON.stringify(state)) {
    clearTimeout(interval);
    start();
    return;
  }

  renderState(newState);
  interval = setTimeout(update, 250);

  state = newState;
}

/**
 * Returns a new cell state based on its current state and the number of live neighbours
 * @param {Number} currentState
 * @param {Number} numLiveNeighbours
 * @return {Number}
 */
function getNewCellState(currentState, numLiveNeighbours) {
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

start();
