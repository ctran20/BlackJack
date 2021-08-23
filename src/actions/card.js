import { Suits, Ranks, RanksValues, Layouts } from '../constants/CardInfo';
export const HIT = 'HIT';

// export const Hit = () => {
//   const newCards = playerCards.concat({
//     rank: Ranks[Math.floor(Math.random() * Ranks.length)],
//     suit: Suits[Math.floor(Math.random() * Suits.length)],
//   });
//   setPlayerCards(newCards);
// };

export const hit = () => ({
  type: HIT,
  payload: {
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit: Suits[Math.floor(Math.random() * Suits.length)],
  },
});
