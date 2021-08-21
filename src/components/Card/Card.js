import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div
      className="bg-white dib br4 ba b--black ma2 grow f1 flex-column"
      style={{ width: 200, height: 280 }}
    >
      {true ? (
        <div className="cardBack br4 ba b--black center" />
      ) : (
        <div
          className={
            props.deck === '♠' || props.deck === '♣'
              ? 'center black ma3'
              : 'center red ma3'
          }
        >
          <h2>{props.rank}</h2>
          <h2>{props.deck}</h2>
        </div>
      )}
    </div>
  );
};

export default Card;
