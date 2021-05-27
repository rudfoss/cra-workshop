import React from 'react';
import './App.css';
import Task from 'tasks/BigBorder';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <Task size={32} id="my-div">
          <h2>With border</h2>
        </Task>
      </header>
    </div>
  );
}

export default App;
