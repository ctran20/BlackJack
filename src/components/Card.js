import React from 'react';

const Card = (props) => {
  return (
    <div
      className="bg-white dib br3 pa3 ma2 grow f1 flex-column"
      style={{ width: 200, height: 280 }}
    >
      <div
        className={
          props.deck === '♠' || props.deck === '♣'
            ? 'center black'
            : 'center red'
        }
      >
        <h2>{props.rank}</h2>
        <h2>{props.deck}</h2>
      </div>
    </div>
  );
};

export default Card;
