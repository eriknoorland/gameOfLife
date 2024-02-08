import gameOfLife from './src/gameOfLife';

const randomInitialState = getRandomInitialState(10, 10);
  
function getRandomInitialState(numRows, numCols) {
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

const gliderInitialState = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const golElement = document.getElementById('gol');
const domRenderer = (state) => {
  golElement.innerHTML = state.reduce((acc, row) => {
    return `${acc}${row.reduce((acc, col) => {
      return `${acc}<span class="state state-${col}"></span>`;
    }, '') + '<br>'}`;
  }, '');
};

// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// const canvasRenderer = (state) => {
//   // do some canvas magic
// };

const game = gameOfLife(gliderInitialState, domRenderer);
game.start();