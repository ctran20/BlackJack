import React from 'react';
import StyledButton from './StyledButton';
import { GAME, MENU, STAND, POST, BET, LOSE } from '../../constants/CardInfo';
import { useDispatch, useSelector } from 'react-redux';
import { takeChip } from '../../actions/bet';

const Buttons = ({
  Hit,
  Stand,
  StartGame,
  gameState,
  setGameState,
  Reset,
  Result,
  Bet,
}) => {
  const { total } = useSelector((state) => state.setChips);
  const dispatch = useDispatch();
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
    case LOSE:
      return (
        <div>
          <StyledButton
            func={() => {
              setGameState(MENU);
              dispatch(takeChip(250));
            }}
            label="Restart"
          />
        </div>
      );
    case POST:
      return (
        <div>
          <StyledButton
            func={() => {
              if (total === 0) {
                setGameState('LOSE');
              } else {
                setGameState(MENU);
              }
              Reset();
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
