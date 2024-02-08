import renderCell from './renderCell';
import determineState from './determineState';

export default (element, initialState) => {
  const intervalDuration = 100;
  let interval;

  function start() {
    const state = initialState;
  
    renderState(state);
    interval = setTimeout(update.bind(null, state), intervalDuration);
  }
  
  /**
   * Renders the given state
   * @param {Array} state
   */
  function renderState(state) {
    element.innerHTML = state.reduce((acc, row) => {
      return `${acc}${row.reduce((acc, col) => {
        return `${acc}${renderCell(col)}`;
      }, '') + '<br>'}`;
    }, '');
  }
  
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

  return {
    start,
  };
};