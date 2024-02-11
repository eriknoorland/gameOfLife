import determineState from './determineState';

interface Options {
  intervalDuration?: number;
};

export default (
  initialState: number[][],
  renderer: (state: number[][]) => void,
  options: Options = {
    intervalDuration: 100,
  }
) => {
  let interval: ReturnType<typeof setTimeout>;

  function start() {
    const state = initialState;
  
    renderer(state);
    
    interval = setTimeout(() => {
      update(state);
    }, options.intervalDuration);
  }
  
  function update(state: number[][]) {
    let newState = determineState(state);
  
    if (newState.toString() === state.toString()) {
      clearTimeout(interval);
      start();
      return;
    }
  
    renderer(state);

    interval = setTimeout(() => {
      update(newState);
    }, options.intervalDuration);
  }

  return {
    start,
  };
};