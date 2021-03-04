import "normalize.css/normalize.css";
import "./App.css";
import { BrowserRouter, NavLink } from "react-router-dom"
import BaseRoute from "routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/article/one">Article one</NavLink>
          </nav>
          <BaseRoute/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
