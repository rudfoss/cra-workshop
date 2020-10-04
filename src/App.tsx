import React from "react"
import Router from "features/Router"
import Nav from "features/Nav"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
