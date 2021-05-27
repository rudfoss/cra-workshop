import React from 'react';
import './App.css';
import Task from 'tasks/Repeat';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Task count={7}>
          <h2 data-index="bar">With border</h2>
        </Task>
      </header>
    </div>
  );
}

export default App;
