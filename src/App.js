import React, { useState } from 'react';
import {
  Suits,
  Ranks,
  RanksValues,
  GAME,
  MENU,
  STAND,
  POST,
  BET,
  LOSE,
} from './constants/CardInfo';
import logo from './imgs/logo.png';
import ten from './imgs/ten.png';
import quart from './imgs/quart.png';
import half from './imgs/half.png';
import hundo from './imgs/hundred.png';
import onek from './imgs/onek.png';
import Buttons from './components/Buttons/Buttons';
import StarterCard from './components/Card/StarterCard';
import Chip from './components/Buttons/Chip';

import 'tachyons';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addChip, betChip, takeChip } from './actions/bet';

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
  const { total, bet } = useSelector((state) => state.setChips);
  const dispatch = useDispatch();

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
      dispatch(takeChip(bet * 2));
      setGameState(POST);
      return;
    }
    if (score === playerScore) {
      setTitle('Tie!');
      dispatch(takeChip(bet));
      setGameState(POST);
      return;
    }
    if (playerScore < score) {
      setTitle('Dealer Win!');
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
    dispatch(betChip());
    setTitle('');
  };

  const Bet = () => {
    setGameState(BET);
    setTitle('$0');
  };

  const pickChip = (value) => {
    dispatch(addChip(value));
    setTitle(`$${value + bet}`);
  };

  const StartGame = () => {
    setGameState(GAME);
    if (
      (playerCards[0].rank === 'A' &&
        RanksValues[playerCards[1].rank] === 10) ||
      (playerCards[1].rank === 'A' && RanksValues[playerCards[0].rank] === 10)
    ) {
      dispatch(takeChip(bet * 2));
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
      {gameState === LOSE ? (
        <div className="center f3">
          <h1>You've lost it all!</h1>
        </div>
      ) : (
        <div>
          <StarterCard
            cardList={dealerCards}
            gameState={gameState}
            dealer={true}
          />
          <div className="center">
            <h1>{title}</h1>
          </div>
          <StarterCard
            cardList={playerCards}
            gameState={gameState}
            dealer={false}
          />
        </div>
      )}
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
            <Chip value={10} total={total} addChip={pickChip} imgSrc={ten} />
            <Chip value={20} total={total} addChip={pickChip} imgSrc={quart} />
            <Chip value={50} total={total} addChip={pickChip} imgSrc={half} />
            <Chip value={100} total={total} addChip={pickChip} imgSrc={hundo} />
            <Chip value={1000} total={total} addChip={pickChip} imgSrc={onek} />
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
