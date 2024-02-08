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
    let content = '';
  
    state.forEach((row) => {
      content += row.reduce((acc, col) => `${acc}${renderCell(col)}`, '') + '<br>';
    });
  
    element.innerHTML = content;
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