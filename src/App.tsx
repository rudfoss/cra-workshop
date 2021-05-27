import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom"
import { Routes } from 'Routes';
// import Task from 'tasks/Repeat';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
