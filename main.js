import gameOfLife from './src/gameOfLife';

const initialState = getInitialState(100, 100);
  
function getInitialState(numRows, numCols) {
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

const game = gameOfLife(document.getElementById('gol'), initialState);
game.start();