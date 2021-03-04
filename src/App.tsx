import TextInput from "UI/TextInput";
import "normalize.css/normalize.css";
import "./App.css";
import { useState } from "react";
import RangeInput from "UI/RangeInput";

function App() {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [age, setAge] = useState(16)

  return (
    <div className="App">
      <header className="App-header">
        <TextInput value={firstname} onChange={setFirstname} label="First name"/>
        <TextInput value={lastname} onChange={setLastname} label="Last name"/>
        <RangeInput label="Age" min={18} max={99} value={age} onChange={setAge} />
        <p>Hello {firstname} {lastname}, you are {age} years old</p>
      </header>
    </div>
  );
}

export default App;
