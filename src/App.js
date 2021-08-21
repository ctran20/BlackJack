import React from 'react';
import Card from './components/Card/Card';
import { Suits, Ranks, RanksValues, Layouts } from './constants/CardInfo';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div>
      <div className="center ma3">
        <Card rank="A" deck="♥" />
        <Card rank="2" deck="♠" />
      </div>

      <div className="center ma3">
        <Card rank="J" deck="♣" />
        <Card rank="K" deck="♦" />
      </div>

      <div className="center">
        <button
          style={{ width: 150 }}
          className="pa3 ma3 ba bg-yellow grow"
          type="submit"
          onClick={() => {}}
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
