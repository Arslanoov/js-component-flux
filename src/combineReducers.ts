export const combineReducers = (reducers) => {
  const nextState = {};
  const reducerFunctions = {};
  const reducersKeys = Object.keys(reducers);

  reducersKeys.forEach((key) => {
    if (typeof reducers[key] === 'function') {
      reducerFunctions[key] = reducers[key];
    }
  });

  const reducerFunctionsKeys = Object.keys(reducerFunctions);

  return (state = {}, action) => {
    reducerFunctionsKeys.forEach((key) => {
      const reducer = reducerFunctions[key];
      nextState[key] = reducer(state[key], action);
    });

    return nextState;
  };
};
