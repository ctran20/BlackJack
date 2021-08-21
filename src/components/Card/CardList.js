import React from 'react';
import Card from './Card';

const CardList = (props) => {
  const { cards } = props;
  const cardComponent = cards.map((rank, suit) => {
    return <Card rank={rank} deck={suit} />;
  });

  return <div>{cardComponent}</div>;
};

export default CardList;
