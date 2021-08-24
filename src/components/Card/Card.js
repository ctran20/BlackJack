import React from 'react';
import './Card.css';

const Card = (props) => {
  const { rank, deck, side } = props;
  return (
    <div
      className="bg-white dib br4 ba b--black ma1 grow f1 flex-column"
      style={{ width: 200, height: 280 }}
    >
      {side ? (
        <div
          className={
            deck === '♠' || deck === '♣' ? 'center black ma3' : 'center red ma3'
          }
        >
          <h2>{rank}</h2>
          <h2>{deck}</h2>
        </div>
      ) : (
        <div className="cardBack br4 ba b--black center" />
      )}
    </div>
  );
};

export default Card;
