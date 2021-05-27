import React from 'react';
import BigBorder from 'tasks/BigBorder';
import './App.css';
// import Task from 'tasks/Repeat';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <BigBorder footer={<p>I am the footer</p>}>
          <h2>This is inside a border</h2>
        </BigBorder>
      </header>
    </div>
  );
}

export default App;
