import { ADD_CHIP, BET_CHIP, TAKE_CHIP } from '../actions/bet';

const initialState = {
  total: 250,
  bet: 0,
};

export const setChips = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CHIP:
      return Object.assign({}, state, {
        bet: state.bet + action.payload,
        total: state.total - action.payload,
      });
    case BET_CHIP:
      return Object.assign({}, state, {
        bet: 0,
      });
    default:
      return state;
  }
};
