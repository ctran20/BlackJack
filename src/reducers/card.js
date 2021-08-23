import { HIT } from '../actions/card';

const startedCards = {
  playerCards: [],
};

export const playerChoice = (state = startedCards, action) => {
  switch (action.type) {
    case HIT:
      return Object.assign({}, state, {
        playerCards: state.concat(action.payload),
      });
    default:
      return state;
  }
};
