import "normalize.css/normalize.css";
import "./App.css";
import CompositionExample from "tasks/CompositionExample";
import Incrementor from "tasks/Incrementor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompositionExample
          a="this is the value of a"
          b={<p>This is a paragraph in b</p>}
          c={<Incrementor limit={100}/>}/>
      </header>
    </div>
  );
}

export default App;
