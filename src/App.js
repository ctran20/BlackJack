import React from 'react';
import Card from './components/Card';
import { Suits, Ranks, RanksValues, Layouts } from './constants/CardInfo';
import 'tachyons';
import './App.css';

function App() {
  return (
    <div>
      <div className="center">
        <Card rank="A" deck="♥" />
        <Card rank="2" deck="♠" />
      </div>
      <div className="center">
        <Card rank="J" deck="♣" />
        <Card rank="K" deck="♦" />
      </div>
    </div>
  );
}

export default App;
