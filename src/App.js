import React, { useState, useEffect, useReducer } from 'react';
import logo from './imgs/logo.png';
import Buttons from './components/Buttons/Buttons';
import StarterCard from './components/Card/StarterCard';
import {
  Suits,
  Ranks,
  RanksValues,
  Dealer,
  Player,
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
  const [playerCards, setPlayerCards] = useState(Player);
  const [dealerCards, setDealerCards] = useState(Dealer);
  const [title, setTitle] = useState('BlackJack');
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

    setPlayerScore(CountCard(updatedCards));
    setPlayerCards(updatedCards);

    if (playerScore + RanksValues[newCards.rank] > 21) {
      setTitle('Bust!');
      setGameState(POST);
    }
  };

  const CountCard = (cards) => {
    let score = 0;
    let allAs = 0;
    for (let x in cards) {
      if (cards[x].rank === 'A') {
        allAs++;
      } else {
        score += RanksValues[cards[x].rank];
      }
    }

    for (let i = 0; i < allAs; i++) {
      if (score < 21) {
        score += RanksValues['1'];
      } else {
        score += RanksValues['A'];
      }
    }

    return score;
  };

  const DealerHit = () => {
    const newCards = {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    };
    const updatedCards = dealerHitCards.concat(newCards);

    setDealerHitScore(dealerHitScore + RanksValues[newCards.rank]);
    setDealerHitCards(updatedCards);
  };

  const Result = () => {
    setDealerCards(dealerHitCards);
    if (dealerScore + dealerHitScore > 21) {
      setTitle('You Win!');
      setGameState(POST);
      return;
    }
    if (dealerScore + dealerHitScore === playerScore) {
      setTitle('You Tie!');
      setGameState(POST);
      return;
    }
    if (playerScore < dealerScore + dealerHitScore) {
      setTitle('You Lose!');
      setGameState(POST);
    } else {
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
    setPlayerCards(Player);
    setDealerCards(Dealer);
    setPlayerScore(0);
    setDealerScore(0);
    setDealerHitScore(0);
    setDealerHitCards([]);
    setTitle('BlackJack');
  };

  const StartGame = () => {
    setGameState(GAME);
    if (
      (playerCards[0].rank === 'A' &&
        RanksValues[playerCards[1].rank] === 10) ||
      (playerCards[1].rank === 'A' && RanksValues[playerCards[0].rank] === 10)
    ) {
      setTitle('Blackjack! You Win!');
      setGameState(POST);
    }
    setPlayerScore(
      RanksValues[playerCards[0].rank] + RanksValues[playerCards[1].rank]
    );
    setDealerScore(
      RanksValues[dealerCards[0].rank] + RanksValues[dealerCards[1].rank]
    );
  };

  return (
    <div>
      <div className="center">
        <img style={{ width: 400 }} alt="logo" src={logo} />
      </div>
      <StarterCard cardList={dealerCards} gameState={gameState} dealer={true} />
      <div className="center">
        <h1>{title}</h1>
      </div>
      <StarterCard
        cardList={playerCards}
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
        <h1>Dealer: {dealerScore + dealerHitScore}</h1>
      </div>
      <div className="center">
        <h1>Player: {playerScore}</h1>
      </div>
    </div>
  );
}

export default App;
