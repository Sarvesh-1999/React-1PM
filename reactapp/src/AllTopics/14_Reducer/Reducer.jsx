import React, { useReducer } from "react";

let initialState = 0;

function reducerFunction(prevState, action) {
  console.log(prevState, action);

  switch (action) {
    case "incre":
      return prevState + 1;
    case "decre":
      return prevState - 1;
    case "reset":
      return 0;
  }
}

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div>
      <h1>Learn useReducer Hook - {count}</h1>
      <button onClick={() => dispatch("incre")}>increment</button>
      <button onClick={() => dispatch("decre")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Reducer;
