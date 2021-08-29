import React, { useState, useEffect, useReducer } from 'react';
import logo from './imgs/logo.png';
import ten from './imgs/ten.png';
import quart from './imgs/quart.png';
import half from './imgs/half.png';
import hundred from './imgs/hundred.png';
import onek from './imgs/onek.png';
import Buttons from './components/Buttons/Buttons';
import StarterCard from './components/Card/StarterCard';
import Chip from './components/Buttons/Chip';
import {
  Suits,
  Ranks,
  RanksValues,
  GAME,
  MENU,
  STAND,
  POST,
  BET,
} from './constants/CardInfo';
import 'tachyons';
import './App.css';

function App() {
  const Dealer = [
    {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    },
    {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    },
  ];
  const Player = [
    {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    },
    {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    },
  ];
  const [gameState, setGameState] = useState(MENU);
  const [playerCards, setPlayerCards] = useState(Player);
  const [dealerCards, setDealerCards] = useState(Dealer);
  const [title, setTitle] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [total, setTotal] = useState(250);
  const [bet, setBet] = useState(0);

  const Hit = () => {
    const newCards = {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    };
    const updatedCards = playerCards.concat(newCards);
    let score = CountCard(updatedCards);

    setPlayerScore(score);
    setPlayerCards(updatedCards);

    if (score > 21) {
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
      }
      score += RanksValues[cards[x].rank];
    }

    for (let i = 0; i < allAs; i++) {
      if (score > 21) {
        score -= 9;
      }
    }

    return score;
  };

  const DealerHit = () => {
    const newCards = {
      rank: Ranks[Math.floor(Math.random() * Ranks.length)],
      suit: Suits[Math.floor(Math.random() * Suits.length)],
    };
    const updatedCards = dealerCards.concat(newCards);
    let score = CountCard(updatedCards);

    setDealerScore(score);
    setDealerCards(updatedCards);

    if (score > 21) {
      setTitle('You Win!');
      setGameState(POST);
      return;
    }
    if (score === playerScore) {
      setTitle('You Tie!');
      setGameState(POST);
      return;
    }
    if (playerScore < score) {
      setTitle('You Lose!');
      setGameState(POST);
    }
  };

  const Stand = () => {
    setGameState(STAND);

    if (playerScore < dealerScore) {
      setTitle('You Lose!');
      setGameState(POST);
    }
  };

  const Reset = () => {
    setPlayerCards(Player);
    setDealerCards(Dealer);
    setPlayerScore(0);
    setDealerScore(0);
    setTitle('');
  };

  const Bet = () => {
    setGameState(BET);
    setTitle('$0');
  };

  const addChip = (value) => {
    setBet(value + bet);
    setTitle(`$${value + bet}`);
    setTotal(total - bet);
  };

  const StartGame = () => {
    setTotal(total - bet);
    setBet(0);
    setGameState(GAME);
    if (
      (playerCards[0].rank === 'A' &&
        RanksValues[playerCards[1].rank] === 10) ||
      (playerCards[1].rank === 'A' && RanksValues[playerCards[0].rank] === 10)
    ) {
      setTitle('Blackjack!');
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
        <img style={{ width: 300 }} alt="logo" src={logo} />
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
          Result={DealerHit}
          Bet={Bet}
          addChip={addChip}
        />
      </div>
      <div className="bank">
        <div
          style={{
            width: 150,
            borderRadius: 5,
            textAlign: 'center',
          }}
          className="pa3 ba b--black bg-yellow"
        >
          <h1>{`Total: $${total}`}</h1>
        </div>
        {gameState === BET ? (
          <div>
            <Chip value={10} total={total} addChip={addChip} imgSrc={ten} />
            <Chip value={20} total={total} addChip={addChip} imgSrc={quart} />
            <Chip value={50} total={total} addChip={addChip} imgSrc={half} />
            <Chip
              value={100}
              total={total}
              addChip={addChip}
              imgSrc={hundred}
            />
            <Chip value={1000} total={total} addChip={addChip} imgSrc={onek} />
          </div>
        ) : (
          <div />
        )}
      </div>
      {/* <div className="center">
        <h1>Dealer: {dealerScore}</h1>
      </div>
      <div className="center">
        <h1>Player: {playerScore}</h1>
      </div> */}
    </div>
  );
}

export default App;
