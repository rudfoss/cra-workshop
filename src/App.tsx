import React from "react"
import Router from "features/Router"
import Nav from "features/Nav"
import { BrowserRouter } from "react-router-dom"
import Layout from "features/Layout"
import { UserContextProvider } from "features/UserContext"
import { UserContextData } from "features/UserContext/userContext"
import Footer from "features/Footer"

const user: UserContextData = {
  name: "Ola Normann",
  email: "ola@norge.no"
}

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider userContextData={user}>
        <Nav/>
        <Layout footer={<Footer/>}>
          <Router/>
        </Layout>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
