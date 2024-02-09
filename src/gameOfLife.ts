import determineState from './determineState';

export default (initialState: number[][], renderer: (state: number[][]) => void) => {
  const intervalDuration = 100;
  let interval: ReturnType<typeof setTimeout>;

  function start() {
    const state = initialState;
  
    renderState(state);
    interval = setTimeout(update.bind(null, state), intervalDuration);
  }
  
  function update(state: number[][]) {
    let newState = determineState(state);
  
    if (newState.toString() === state.toString()) {
      clearTimeout(interval);
      start();
      return;
    }
  
    renderState(newState);
    interval = setTimeout(update.bind(null, newState), intervalDuration);
  }
  
  function renderState(state: number[][]) {
    renderer(state);
  }

  return {
    start,
  };
};