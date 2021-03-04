import "normalize.css/normalize.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom"
import BaseRoute from "routes";
import Nav from "tasks/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <BaseRoute/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
