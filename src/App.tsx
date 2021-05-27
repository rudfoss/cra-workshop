import React from 'react';
import ConnectedTicker from 'tasks/ConnectedTicker';
import './App.css';
// import Task from 'tasks/Repeat';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <ConnectedTicker/>
      </header>
    </div>
  );
}

export default App;
