export const ACTION_INCREASE = 'INCREASE';
export const ACTION_DECREASE = 'DECREASE';

export const increase = () => ({
  type: ACTION_INCREASE,
});

export const decrease = () => ({
  type: ACTION_DECREASE,
});

export const countSelector = (state) => state.counter.count;

const initialState = {
  count: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_INCREASE:
      return {
        ...state,
        count: state.count + 1
      };
    case ACTION_DECREASE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}
