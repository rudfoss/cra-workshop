import logo from './logo.svg';
import './App.css';
import Ticker from './Ticker';
import Incrementor from './Incrementor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ticker message="This is a scrolling message"/>
        <Incrementor/>
      </header>
    </div>
  );
}

export default App;
