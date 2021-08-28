import React from 'react';
import StyledButton from './StyledButton';
import { GAME, MENU, STAND, POST } from '../../constants/CardInfo';

const Buttons = ({
  Hit,
  Stand,
  StartGame,
  gameState,
  setGameState,
  Reset,
  Result,
}) => {
  switch (gameState) {
    case GAME:
      return (
        <div>
          <StyledButton func={Hit} label="Hit" />
          <StyledButton func={Stand} label="Stand" />
        </div>
      );
    case MENU:
      return (
        <div>
          <StyledButton func={StartGame} label="Start" />
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
