import React, { useState, useEffect, useReducer } from 'react';
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

  const [player, setPlayer] = useState({
    playerRank1: Ranks[Math.floor(Math.random() * Ranks.length)],
    playerRank2: Ranks[Math.floor(Math.random() * Ranks.length)],
    playerSuit1: Suits[Math.floor(Math.random() * Suits.length)],
    playerSuit2: Suits[Math.floor(Math.random() * Suits.length)],
  });

  const [dealer, setDealer] = useState({
    dealerRank1: Ranks[Math.floor(Math.random() * Ranks.length)],
    dealerRank2: Ranks[Math.floor(Math.random() * Ranks.length)],
    dealerSuit1: Suits[Math.floor(Math.random() * Suits.length)],
    dealerSuit2: Suits[Math.floor(Math.random() * Suits.length)],
  });

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  // useEffect(() => {
  //   setPlayerScore(playerScore + RanksValues[playerCards[-1].rank]);
  //   console.log(playerScore);
  // }, [playerCards]);

  const Hit = () => {
    const newCards = {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    };
    const updatedCards = playerCards.concat(newCards);

    setPlayerScore(playerScore + RanksValues[newCards.rank]);
    console.log(playerScore);

    setPlayerCards(updatedCards);
  };

  const Stand = () => {};

  return (
    <div>
      <div className="center ma3">
        <Card
          rank={dealer.dealerRank1}
          deck={dealer.dealerSuit1}
          side={gameState === 'MENU' ? false : true}
        />
        <Card
          rank={dealer.dealerRank2}
          deck={dealer.dealerSuit2}
          side={gameState === 'MENU' ? false : true}
        />
      </div>
      <div className="center">
        <h2>BlackJack</h2>
      </div>
      <div className="center ma3">
        <Card
          rank={player.playerRank1}
          deck={player.playerSuit1}
          side={gameState === 'MENU' ? false : true}
        />
        <Card
          rank={player.playerRank2}
          deck={player.playerSuit2}
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
