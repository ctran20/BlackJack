import React from 'react';
import styledButton from './styledButton';
import './Button.css';

const Button = ({ Hit, Stand, gameState, setGameState }) => {
  return (
    <div className="center">
      {gameState === GAME ? (
        <div>
          <styledButton func={Hit} label="Hit" />
          <styledButton func={Stand} label="Hit" />
        </div>
      ) : (
        <button
          style={{ width: 150 }}
          className="pa3 ma4 ba bg-yellow grow"
          type="submit"
          onClick={
            gameState === MENU
              ? StartGame
              : () => {
                  setGameState(MENU);
                  Reset();
                }
          }
        >
          {gameState === MENU ? 'Start' : 'Menu'}
        </button>
      )}
    </div>
  );
};

export default Button;
