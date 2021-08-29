import { ADD_CHIP } from '../actions/bet';

const initialState = {
  total: 250,
  bet: 0,
};

export const addChip = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CHIP:
      return Object.assign({}, state, {
        bet: action.payload,
        total: state.total - action.payload,
      });
    default:
      return state;
  }
};
