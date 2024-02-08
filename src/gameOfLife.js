import determineState from './determineState';

export default (initialState, renderer) => {
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
    renderer(state);
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