import React, { useState } from 'react';
import Card from './components/Card/Card';
import CardList from './components/Card/CardList';
import { Suits, Ranks, RanksValues, Layouts } from './constants/CardInfo';
import { useDispatch, useSelector } from 'react-redux';
import { hit } from './actions/card';
import 'tachyons';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('MENU');
  const [playerCards, setPlayerCards] = useState([]);
  const dealerRank1 = Ranks[Math.floor(Math.random() * Ranks.length)];
  const dealerRank2 = Ranks[Math.floor(Math.random() * Ranks.length)];

  const dealerSuit1 = Suits[Math.floor(Math.random() * Suits.length)];
  const dealerSuit2 = Suits[Math.floor(Math.random() * Suits.length)];

  const playerRank1 = Ranks[Math.floor(Math.random() * Ranks.length)];
  const playerRank2 = Ranks[Math.floor(Math.random() * Ranks.length)];

  const playerSuit1 = Suits[Math.floor(Math.random() * Suits.length)];
  const playerSuit2 = Suits[Math.floor(Math.random() * Suits.length)];

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
        <Card
          rank={dealerRank1}
          deck={dealerSuit1}
          side={gameState === 'MENU' ? false : true}
        />
        <Card
          rank={dealerRank2}
          deck={dealerSuit2}
          side={gameState === 'MENU' ? false : true}
        />
      </div>
      <div className="center">
        <h2>BlackJack</h2>
      </div>
      <div className="center ma3">
        <Card
          rank={playerRank1}
          deck={playerSuit1}
          side={gameState === 'MENU' ? false : true}
        />
        <Card
          rank={playerRank2}
          deck={playerSuit2}
          side={gameState === 'MENU' ? false : true}
        />
        <CardList cards={playerCards} />
      </div>

      <div className="center">
        {gameState === 'MENU' ? (
          <button
            style={{ width: 150 }}
            className="pa3 ma3 ba bg-yellow grow"
            type="submit"
            onClick={() => {
              setGameState('GAME');
            }}
          >
            Start
          </button>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );
}

export default App;
