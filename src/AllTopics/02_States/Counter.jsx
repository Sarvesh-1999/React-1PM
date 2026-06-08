import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function incre() {
    setCount((prev) => prev + 1);
  }
  function decre() {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return (
    <div>
      <h1>Learn Counter using States</h1>
      <h2>Counter : {count}</h2>
      <button onClick={incre}>incre</button>
      <button onClick={decre} disabled={count === 0 ? true : false}>
        decre
      </button>
    </div>
  );
};

export default Counter;
