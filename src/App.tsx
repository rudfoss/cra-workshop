import React from 'react';
import { ControlledBigBorder } from 'tasks/BigBorder';
import EitherAOrB from 'tasks/EitherAOrB';
import './App.css';
// import Task from 'tasks/Repeat';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <EitherAOrB
          a={
            <ControlledBigBorder footer={<p>I am the footer</p>}>
              <h2>This is inside a border</h2>
            </ControlledBigBorder>
          }
          b={<p>Nothing to see here...</p>}/>
      </header>
    </div>
  );
}

export default App;
