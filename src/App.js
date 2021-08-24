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
    rank1: Ranks[Math.floor(Math.random() * Ranks.length)],
    rank2: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit1: Suits[Math.floor(Math.random() * Suits.length)],
    suit2: Suits[Math.floor(Math.random() * Suits.length)],
  });

  const [dealer, setDealer] = useState({
    rank1: Ranks[Math.floor(Math.random() * Ranks.length)],
    rank2: Ranks[Math.floor(Math.random() * Ranks.length)],
    suit1: Suits[Math.floor(Math.random() * Suits.length)],
    suit2: Suits[Math.floor(Math.random() * Suits.length)],
  });

  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [stand, setStand] = useState('');

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
    setPlayerCards(updatedCards);
  };

  const StartGame = () => {
    setGameState('GAME');
    setPlayerScore(RanksValues[player.rank1] + RanksValues[player.rank2]);
    setDealerScore(RanksValues[dealer.rank2] + RanksValues[dealer.rank2]);
  };

  return (
    <div>
      <div className="center ma3">
        <Card
          rank={dealer.rank1}
          deck={dealer.suit1}
          side={gameState === 'MENU' ? false : true}
        />
        <Card
          rank={dealer.rank2}
          deck={dealer.suit2}
          side={gameState === 'MENU' ? false : true}
        />
      </div>
      <div className="center">
        <h1>BlackJack</h1>
      </div>
      <div className="center ma3">
        <Card
          rank={player.rank1}
          deck={player.suit1}
          side={gameState === 'MENU' ? false : true}
        />
        <Card
          rank={player.rank2}
          deck={player.suit2}
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
            onClick={StartGame}
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
              onClick={() => {
                setStand(
                  'https://media.comicbook.com/2019/11/the-world-jojo-s-bizarre-adventure-1194427-1280x0.jpeg'
                );
              }}
            >
              Stand
            </button>
          </div>
        )}
      </div>
      <div className="center">
        <h1>Dealer: {dealerScore}</h1>
      </div>
      <div className="center">
        <h1>Player: {playerScore}</h1>
      </div>

      <div className="center">
        <img src={stand} />
      </div>
    </div>
  );
}

export default App;
