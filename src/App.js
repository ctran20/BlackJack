import React, { useState } from 'react';
import Card from './components/Card/Card';
import CardList from './components/Card/CardList';
import { Suits, Ranks, RanksValues, Layouts } from './constants/CardInfo';
import 'tachyons';
import './App.css';

function App() {
  const [playerCards, setPlayerCards] = useState([]);

  const Hit = () => {
    const newCards = playerCards.concat({
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    });
    setPlayerCards(newCards);
  };

  return (
    <div>
      <div className="center ma3">
        <Card rank={dealerRank1} deck={dealerSuit1} />
        <Card rank={dealerRank2} deck={dealerSuit2} />
      </div>
      <div className="center">
        <h2>BlackJack</h2>
      </div>
      <div className="center ma3">
        <Card rank={playerRank1} deck={playerSuit1} />
        <Card rank={playerRank2} deck={playerSuit2} />
        <CardList cards={playerCards} />
      </div>

      <div className="center">
        <button
          style={{ width: 150 }}
          className="pa3 ma3 ba bg-yellow grow"
          type="submit"
          onClick={Hit}
        >
          Hit
        </button>

        <button
          style={{ width: 150 }}
          className="pa3 ma3 ba bg-yellow grow"
          type="submit"
          onClick={() => {}}
        >
          Stand
        </button>
      </div>
    </div>
  );
}

export default App;
