import "normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom"
import BaseRoute from "routes";
import Nav from "tasks/Nav";
import Layout from "tasks/Layout";
import ContextExample from "tasks/ContextExample";
import Footer from "tasks/Footer";
import UserContext from "tasks/UserContext";

function App() {
  return (
    <BrowserRouter>
      <ContextExample>
        <UserContext>
          <Layout nav={<Nav/>} footer={<Footer/>}>
            <BaseRoute/>
          </Layout>
        </UserContext>
      </ContextExample>
    </BrowserRouter>
  );
}

export default App;
