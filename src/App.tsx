import React from "react"
import Router from "features/Router"
import Nav from "features/Nav"
import { BrowserRouter } from "react-router-dom"
import Layout from "features/Layout"

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Layout footer={<p>Ciber React Course</p>}>
        <Router/>
      </Layout>
    </BrowserRouter>
  )
}

export default App
