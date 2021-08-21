import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { cards } = props;
  const cardComponent = cards.map((user, i) => {
    return <Card key={i} rank={cards[i].rank} deck={cards[i].suit} />;
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
