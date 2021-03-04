import TextInput from "UI/TextInput";
import "normalize.css/normalize.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <TextInput value={firstname} onChange={setFirstname} label="First name"/>
        <TextInput value={lastname} onChange={setLastname} label="Last name"/>
        <p>Hello {firstname} {lastname}</p>
      </header>
    </div>
  );
}

export default App;
