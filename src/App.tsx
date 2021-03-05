import "normalize.css/normalize.css";
import { BrowserRouter } from "react-router-dom"
import BaseRoute from "routes";
import Nav from "tasks/Nav";
import Layout from "tasks/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout nav={<Nav/>} footer={<p>Footer</p>}>
        <BaseRoute/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
