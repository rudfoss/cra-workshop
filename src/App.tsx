import logo from './logo.svg';
import './App.css';

import StateExample from './StateExample';

// import FirstComponent from "./FirstComponent"
// import HelloWorld from './HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modify <code>src/App.tsx</code> and save to reload.
        </p>
        <StateExample/>
      </header>
    </div>
  );
}

export default App;
