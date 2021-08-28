import React, { useState, useEffect, useReducer } from 'react';
import Card from './components/Card/Card';
import Buttons from './components/Buttons/Buttons';
import CardList from './components/Card/CardList';
import StarterCard from './components/Card/StarterCard';
import {
  Suits,
  Ranks,
  RanksValues,
  GAME,
  MENU,
  STAND,
  POST,
} from './constants/CardInfo';
import { useDispatch, useSelector } from 'react-redux';
import { hit } from './actions/card';
import 'tachyons';
import './App.css';

function App() {
  const [gameState, setGameState] = useState(MENU);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [title, setTitle] = useState('BlackJack');
  const starterCard = [
    {
      rank1: Ranks[Math.floor(Math.random() * Ranks.length)],
      rank2: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit1: Suits[Math.floor(Math.random() * Suits.length)],
      suit2: Suits[Math.floor(Math.random() * Suits.length)],
    },
    {
      rank1: Ranks[Math.floor(Math.random() * Ranks.length)],
      rank2: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit1: Suits[Math.floor(Math.random() * Suits.length)],
      suit2: Suits[Math.floor(Math.random() * Suits.length)],
    },
  ];

  const [player, setPlayer] = useState(starterCard[0]);
  const [dealer, setDealer] = useState(starterCard[1]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [dealerHitScore, setDealerHitScore] = useState(0);
  const [dealerHitCards, setDealerHitCards] = useState([]);

  const Hit = () => {
    const newCards = {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    };
    const updatedCards = playerCards.concat(newCards);

    setPlayerScore(playerScore + RanksValues[newCards.rank]);
    setPlayerCards(updatedCards);

    if (playerScore + RanksValues[newCards.rank] > 21) {
      setTitle('Bust!');
      setGameState(POST);
    }
  };

  const CountCard = (cards) => {
    let score = 0;
    for (let i = 0; i < cards.length; i++) {}
    return score;
  };

  const DealerHit = () => {
    const newCards = {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    };
    const updatedCards = dealerCards.concat(newCards);

    setDealerHitScore(dealerHitScore + RanksValues[newCards.rank]);
    setDealerHitCards(updatedCards);
  };

  const Result = () => {
    setDealerCards(dealerHitCards);
    if (dealerScore + dealerHitScore > 21) {
      setTitle('You Win!');
      setDealerScore(dealerScore + dealerHitScore);
      setGameState(POST);
      return;
    }
    if (playerScore < dealerScore + dealerHitScore) {
      setTitle('You Lose!');
      setDealerScore(dealerScore + dealerHitScore);
      setGameState(POST);
    } else {
      setDealerScore(dealerScore + dealerHitScore);
      DealerHit();
    }
  };

  const Stand = () => {
    setGameState(STAND);
    if (playerScore < dealerScore) {
      setTitle('You Lose!');
      setGameState(POST);
    } else {
      DealerHit();
    }
  };

  const Reset = () => {
    setPlayer(starterCard[0]);
    setDealer(starterCard[1]);
    setPlayerScore(0);
    setDealerScore(0);
    setDealerHitScore(0);
    setPlayerCards([]);
    setDealerCards([]);
    setDealerHitCards([]);
    setTitle('BlackJack');
  };

  const StartGame = () => {
    setGameState(GAME);
    if (
      (player.rank1 === 'A' && RanksValues[player.rank2] === 10) ||
      (player.rank2 === 'A' && RanksValues[player.rank1] === 10)
    ) {
      setTitle('Blackjack! You Win!');
      setGameState(POST);
    }
    setPlayerScore(RanksValues[player.rank1] + RanksValues[player.rank2]);
    setDealerScore(RanksValues[dealer.rank1] + RanksValues[dealer.rank2]);
  };

  return (
    <div className="ma4">
      <StarterCard
        rank1={dealer.rank1}
        suit1={dealer.suit1}
        rank2={dealer.rank2}
        suit2={dealer.suit2}
        hitCards={dealerCards}
        gameState={gameState}
        dealer={true}
      />
      <div className="center">
        <h1 class="f2 lh-title">{title}</h1>
      </div>
      <StarterCard
        rank1={player.rank1}
        suit1={player.suit1}
        rank2={player.rank2}
        suit2={player.suit2}
        hitCards={playerCards}
        gameState={gameState}
        dealer={false}
      />
      <div className="center">
        <Buttons
          Hit={Hit}
          Stand={Stand}
          gameState={gameState}
          setGameState={setGameState}
          StartGame={StartGame}
          Reset={Reset}
          Result={Result}
        />
      </div>
      <div className="center">
        <h1>Dealer: {dealerScore}</h1>
      </div>
      <div className="center">
        <h1>Player: {playerScore}</h1>
      </div>
    </div>
  );
}

export default App;
