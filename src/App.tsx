import "normalize.css/normalize.css";
import "./App.css";
import BigBorder from "UI/BigBorder";
import { useState } from "react";
import { RangeInput } from "UI/RangeInput/RangeInput";

function App() {
  const [borderSize, setBorderSize] = useState(5)

  return (
    <div className="App">
      <header className="App-header">
        
        <RangeInput
          min={1}
          max={100}
          value={borderSize}
          onChange={setBorderSize}
          label="Border size"/> 

        <BigBorder borderSize={borderSize}>
          <p>This is bordered</p>
        </BigBorder>

      </header>
    </div>
  );
}

export default App;
