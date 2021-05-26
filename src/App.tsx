import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Ticker } from './Ticker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Ticker message="Hello world, this is a ticker"/>
      </header>
    </div>
  );
}

export default App;
