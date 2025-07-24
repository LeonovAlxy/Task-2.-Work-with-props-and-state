import { useState } from "react";
import "./App.css";
import SayHI from "./Comps/ChildComp";
import SibComp from "./Comps/SibComp";

function App() {
  const [count, setCount] = useState(0);
  const randomNumb = () => {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  };
  return (
    <>
      <p>Count - {count}</p>
      <button onClick={() => setCount((count) => ++count)}>++count</button>
      <button onClick={() => setCount((count) => (count = 0))}>
        Reset count to zero
      </button>
      <button onClick={() => setCount((count) => (count = randomNumb()))}>
        Random number from 1 to 10
      </button>
      <button
        onClick={() => setCount((count) => (count > 0 ? --count : count))}
      >
        {`Decrease in case count > 0`}
      </button>
      <SayHI name={`Ivan`} count={count} />
      <SibComp />
    </>
  );
}

export default App;
