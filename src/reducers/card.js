import { HIT } from "../actions/card"

const startedCards ={
  dealerRank1 = Ranks[Math.floor(Math.random() * Ranks.length)],
  dealerRank2 = Ranks[Math.floor(Math.random() * Ranks.length)],
  dealerSuit1 = Suits[Math.floor(Math.random() * Suits.length)],
  dealerSuit2 = Suits[Math.floor(Math.random() * Suits.length)],
  playerRank1 = Ranks[Math.floor(Math.random() * Ranks.length)],
  playerRank2 = Ranks[Math.floor(Math.random() * Ranks.length)],
  playerSuit1 = Suits[Math.floor(Math.random() * Suits.length)],
  playerSuit2 = Suits[Math.floor(Math.random() * Suits.length)],
}

export const playerChoice = (state = startedCards, action) => {
  switch (action.type) {
    case HIT:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};