import React from 'react';
import './App.css';
import Incrementor from 'features/Incrementor';
import Ticker from 'features/Ticker';

function App() {
  return (
    <div className="App">
      <Incrementor limit={10}/>
      <Ticker message="Hello world, this is a scrolling message"/>
    </div>
  );
}

export default App;
