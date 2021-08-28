import React from 'react';
import Card from './Card';
import { GAME, MENU } from '../../constants/CardInfo';

const CardList = ({ cards, gameState, dealer }) => {
  const checkSide = (i) => {
    if (i === 1 && dealer && gameState === GAME) {
      return false;
    } else if (i < 2 && gameState === MENU) {
      return false;
    } else {
      return true;
    }
  };
  const cardComponent = cards.map((user, i) => {
    return (
      <Card
        key={i}
        rank={cards[i].rank}
        deck={cards[i].suit}
        side={!!checkSide(i)}
      />
    );
  });
  return <div className="center">{cardComponent}</div>;
};

export default CardList;
