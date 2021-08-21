import React, { useState } from 'react';
import Card from './components/Card/Card';
import CardList from './components/Card/CardList';
import { Suits, Ranks, RanksValues, Layouts } from './constants/CardInfo';
import 'tachyons';
import './App.css';

function App() {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerRank1] = useState(
    Ranks[Math.floor(Math.random() * Ranks.length)]
  );
  const [dealerRank2] = useState(
    Ranks[Math.floor(Math.random() * Ranks.length)]
  );
  const [dealerSuit1] = useState(
    Suits[Math.floor(Math.random() * Suits.length)]
  );
  const [dealerSuit2] = useState(
    Suits[Math.floor(Math.random() * Suits.length)]
  );

  const [playerRank1] = useState(
    Ranks[Math.floor(Math.random() * Ranks.length)]
  );
  const [playerRank2] = useState(
    Ranks[Math.floor(Math.random() * Ranks.length)]
  );
  const [playerSuit1] = useState(
    Suits[Math.floor(Math.random() * Suits.length)]
  );
  const [playerSuit2] = useState(
    Suits[Math.floor(Math.random() * Suits.length)]
  );

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
