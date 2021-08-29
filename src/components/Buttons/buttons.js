import React from 'react';
import StyledButton from './StyledButton';
import { GAME, MENU, STAND, POST, BET } from '../../constants/CardInfo';

const Buttons = ({
  Hit,
  Stand,
  StartGame,
  gameState,
  setGameState,
  Reset,
  Result,
  Bet,
  addChip,
}) => {
  switch (gameState) {
    case GAME:
      return (
        <div>
          <StyledButton func={Hit} label="Hit" />
          <StyledButton func={Stand} label="Stand" />
        </div>
      );
    case BET:
      return (
        <div>
          <StyledButton func={StartGame} label="Start" />
        </div>
      );
    case MENU:
      return (
        <div>
          <StyledButton func={Bet} label="Start Game" />
        </div>
      );
    case STAND:
      return (
        <div>
          <StyledButton func={Result} label="Next" />
        </div>
      );
    case POST:
      return (
        <div>
          <StyledButton
            func={() => {
              Reset();
              setGameState(MENU);
            }}
            label="Menu"
          />
        </div>
      );
    default:
      return <div>{`Error! In ${gameState}`}</div>;
  }
};

export default Buttons;
