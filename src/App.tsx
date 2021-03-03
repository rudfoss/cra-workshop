import './App.css';
import Repeat from './Repeat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Repeat count={10}>
          <Repeat count={3}>
            <p style={{fontWeight: "bold"}}>This is the end of the list</p>
          </Repeat>
        </Repeat>
      </header>
    </div>
  );
}

export default App;
