import "normalize.css/normalize.css";
import EitherAOrB from "tasks/EitherAOrB";
import HelloWorld from "tasks/HelloWorld";
import Incrementor from "tasks/Incrementor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <EitherAOrB
          a={<Incrementor/>}
          b={<HelloWorld name="Incognito"/>}
          />

      </header>
    </div>
  );
}

export default App;
