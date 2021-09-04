import { Suits, Ranks } from '../constants/CardInfo';
export const HIT = 'HIT';

export const hit = () => ({
  type: HIT,
  payload: {
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit: Suits[Math.floor(Math.random() * Suits.length)],
  },
});
