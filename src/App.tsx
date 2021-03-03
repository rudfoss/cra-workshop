import logo from './logo.svg';
import './App.css';
import Incrementor from './Incrementor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modify <code>src/App.tsx</code> and save to reload.
        </p>
        <Incrementor limit={20}/>
      </header>
    </div>
  );
}

export default App;
