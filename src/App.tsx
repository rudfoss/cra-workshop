import './App.css';
import Repeat from 'tasks/Repeat';
import Incrementor from 'tasks/Incrementor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Repeat count={2}>
          <Incrementor limit={10}/>
        </Repeat>
      </header>
    </div>
  );
}

export default App;
