import { useContext } from "react";
import { CounterContext } from "./Practice";

const Counter = () => {
  let data = useContext(CounterContext);
  console.log(data); // {count: 0, handleIncre: ƒ}

  return (
    <div>
      <h1>Counter {data.count}</h1>
      <button onClick={data.handleIncre}>add</button>
    </div>
  );
};
export default Counter;
