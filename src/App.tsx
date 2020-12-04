import Router from "features/Router"
import Nav from "features/Nav"
import { BrowserRouter } from "react-router-dom"
import Layout from "features/Layout"
import { UserContextProvider } from "features/UserContext"
import Footer from "features/Footer"
import { TodoProvider } from "features/TodoList"

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <TodoProvider>
          <Nav/>
          <Layout footer={<Footer/>}>
            <Router/>
          </Layout>
        </TodoProvider>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
