import React from 'react';
import CardList from './CardList';

const StarterCard = ({ gameState, cardList, dealer }) => {
  return (
    <div className="center ma3">
      <CardList cards={cardList} gameState={gameState} dealer={dealer} />
    </div>
  );
};

export default StarterCard;
