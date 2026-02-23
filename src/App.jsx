import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <h1>My First React App</h1>
      <p>Count is {count}</p>

      {/* Button wrapper for center alignment */}
      <div className="button-group">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div className="card">
        <p className="read-the-docs">
          Welcome to my first React App!

        </p>
      </div>
    </div>
  );
}

export default App;
