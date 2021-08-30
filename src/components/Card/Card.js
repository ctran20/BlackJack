import React from 'react';
import './Card.css';

const Card = (props) => {
  const { rank, deck, side } = props;
  return (
    <div
      className="bg-white dib br4 ba b--black ma1 grow shadow-5 f1 flex-column"
      style={{ width: 160, height: 240 }}
    >
      {side ? (
        <div
          className={
            deck === '♠' || deck === '♣' ? 'center black ma3' : 'center red ma3'
          }
        >
          <h3>{rank}</h3>
          <h3>{deck}</h3>
        </div>
      ) : (
        <div className="cardBack br4 ba b--black center" />
      )}
    </div>
  );
};

export default Card;
