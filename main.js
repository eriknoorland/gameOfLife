const gol = document.getElementById('gol');
const numRows = 100;
const numCols = numRows;
const intervalDuration = 100;
let interval;

/**
 * Start
 */
function start() {
  const state = getInitialState();

  renderState(state);
  interval = setTimeout(update.bind(null, state), intervalDuration);
}

/**
 * Returns a 'random' initial state
 * @return {Array}
 */
function getInitialState() {
  const state = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j < numCols; j++) {
      row.push(Math.round(Math.random()));
    }

    state.push(row);
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

/**
 * Renders the given state
 * @param {Array} state
 */
function renderState(state) {
  let content = '';

  state.forEach((row) => {
    content += row.reduce((acc, col) => `${acc}${renderCell(col)}`, '') + '<br>';
  });

  gol.innerHTML = content;
}

/**
 * Updates the state every x amount of time
 */
function update(state) {
  let newState = determineState(state);

  if (newState.toString() === state.toString()) {
    clearTimeout(interval);
    start();
    return;
  }

  renderState(newState);
  interval = setTimeout(update.bind(null, newState), intervalDuration);
}

/**
 * Returns a new cell state based on its current state and the number of live neighbours
 * @param {Number} currentState
 * @param {Number} numLiveNeighbours
 * @return {Number}
 */
function getNewCellState(currentState, numLiveNeighbours) {
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

/**
 * Renders a cell with the given state
 * @param {int} state
 * @return {String}
 */
function renderCell(state) {
  return `<span class="state state-${state}"></span>`
}

/**
 * Returns the previous or the last array index based on the given index
 * @param {Array} array
 * @param {Number} index
 * @return {Number}
 */
function getPrevArrayIndex(array, index) {
  return --index === -1 ? array.length - 1 : index;
}

/**
 * Returns the next or the first array index based on the given index
 * @param {Array} array
 * @param {Number} index
 * @return {Number}
 */
function getNextArrayIndex(array, index) {
  return ++index === array.length ? 0 : index;
}
