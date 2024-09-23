let count = 0;
const setCount = () => {
  count++;
  console.log(count);
};
const App = () => {
  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
