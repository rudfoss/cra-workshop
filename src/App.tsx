import "normalize.css/normalize.css";
import "./App.css";
import ConnectedTicker from "tasks/ConnectedTicker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectedTicker />
      </header>
    </div>
  );
}

export default App;
