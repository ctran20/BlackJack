import React from 'react';
import Card from './Card';
import CardList from './CardList';
import { GAME, MENU } from '../../constants/CardInfo';

const StarterCard = ({
  rank1,
  suit1,
  rank2,
  suit2,
  gameState,
  hitCards,
  dealer,
}) => {
  let secondCard;
  if (dealer && gameState === GAME) {
    secondCard = false;
  } else if (gameState === MENU) {
    secondCard = false;
  } else {
    secondCard = true;
  }

  return (
    <div className="center ma3">
      <Card
        rank={rank1}
        deck={suit1}
        side={gameState === MENU ? false : true}
      />
      <Card rank={rank2} deck={suit2} side={secondCard} />
      <CardList cards={hitCards} />
    </div>
  );
};

export default StarterCard;
