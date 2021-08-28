export const MENU = 'MENU';
export const GAME = 'GAME';
export const STAND = 'STAND';
export const POST = 'POST';

export const Suits = ['♠', '♥', '♦', '♣'];

export const Ranks = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];

export const RanksValues = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  A: 10,
  J: 10,
  Q: 10,
  K: 10,
};

export const Dealer = [
  {
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit: Suits[Math.floor(Math.random() * Suits.length)],
  },
  {
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit: Suits[Math.floor(Math.random() * Suits.length)],
  },
];
export const Player = [
  {
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit: Suits[Math.floor(Math.random() * Suits.length)],
  },
  {
    rank: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit: Suits[Math.floor(Math.random() * Suits.length)],
  },
];

export const Layouts = {};
