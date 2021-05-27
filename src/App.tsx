import React, { useState } from 'react';
import RangeInput from 'ui/RangeInput';
import TextInput from 'ui/TextInput';
import './App.css';
// import Task from 'tasks/Repeat';

function App() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [size, setSize] = useState(5)

  return (
    <div className="App" >
      <header className="App-header">
        <TextInput id="name" label="Enter your name" value={name} onChange={setName} />
        <TextInput id="address" label="Enter your address" value={address} onChange={setAddress} />
        <TextInput id="phone" label="Enter your phone number" value={phone} onChange={setPhone} />
        <RangeInput id="size" label={`Size ${size}`} min={1} max={20} value={size} onChange={setSize} />
        <p>
          Hi {name}. Your address is {address} and your phone is {phone}
        </p>
      </header>
    </div>
  );
}

export default App;
