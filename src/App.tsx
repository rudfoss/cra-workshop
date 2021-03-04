import "normalize.css/normalize.css";
import "./App.css";
import TodoList from "tasks/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
