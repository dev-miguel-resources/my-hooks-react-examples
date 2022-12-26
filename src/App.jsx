import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [dependency1, setDependency1] = useState(1);
  const [dependency2, setDependency2] = useState(1);

  useEffect(() => {
    console.log("only dependency1", dependency1, dependency2);
  }, [dependency1]);

  useEffect(() => {
    console.log("dependency1 and dependency2", dependency1, dependency2);
  }, [dependency1, dependency2]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setDependency1((prev) => prev + 1);
        }}
      >
        Change dependency1
      </button>
      <button
        onClick={() => {
          setDependency2((prev) => prev + 1);
        }}
      >
        Change dependency2
      </button>
      <button
        onClick={() => {
          setDependency1((prev) => prev + 1);
          setDependency2((prev) => prev + 1);
        }}
      >
        Change both
      </button>
    </div>
  );
}

export default App;
