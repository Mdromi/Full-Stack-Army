import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React</h1>
      <div className="card">
        {count >= 0 ? (
          <div>
            <button onClick={() => setCount((count) => count + 1)}>
              + {count}
            </button>
            <p>{count}</p>
            <button onClick={() => setCount((count) => count - 1)}>
              - {count}
            </button>{" "}
          </div>
        ) : (
          <p>Invalid Number</p>
        )}
      </div>
    </div>
  );
}

export default App;
