import "normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom"
import BaseRoute from "routes";
import Nav from "tasks/Nav";
import Layout from "tasks/Layout";
import ContextExample from "tasks/ContextExample";

function App() {
  return (
    <BrowserRouter>
      <ContextExample>
        <Layout nav={<Nav/>} footer={<p>Footer</p>}>
          <BaseRoute/>
        </Layout>
      </ContextExample>
    </BrowserRouter>
  );
}

export default App;
