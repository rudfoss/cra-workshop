import React from 'react';
import TodoList from 'tasks/TodoList';
import './App.css';
// import Task from 'tasks/Repeat';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
