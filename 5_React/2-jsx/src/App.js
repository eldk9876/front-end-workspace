import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const setCounter = () => {
    setCount(count + 10);
  };
  const setCounter1 = () => {
    setCount(count - 10);
  };
  const setCounter2 = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={setCounter}>+10</button>
      <button onClick={setCounter1}>-10</button>
      <button onClick={setCounter2}>reset</button>
    </div>
  );
};

export default App;
