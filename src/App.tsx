import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Routes } from 'Routes';
import Nav from 'tasks/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <header className="App-header">
          <Nav />
          <Routes />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
