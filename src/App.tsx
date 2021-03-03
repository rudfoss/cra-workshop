import React from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from "./FirstComponent"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modify <code>src/App.tsx</code> and save to reload.
        </p>
        <FirstComponent name="Thomas" greeting="Goodbye"/>
      </header>
    </div>
  );
}

export default App;
