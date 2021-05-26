import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Incrementor } from './Incrementor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Incrementor limit={50} warningText="Close..."/>
      </header>
    </div>
  );
}

export default App;
