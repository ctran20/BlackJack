export const ADD_CHIP = 'ADD_CHIP';
export const TAKE_CHIP = 'TAKE_CHIP';
export const BET_CHIP = 'BET_CHIP';

export const addChip = (amount) => ({
  type: ADD_CHIP,
  payload: amount,
});

export const betChip = () => ({
  type: BET_CHIP,
});
