import React, { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Optimization = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  //   const multiply = () => {
  //     console.log("multiply");
  //     return add * 5;
  //   };

  //! useMemo is a performance optimization hook which is used to avoid unessesary expensive calculation while rendering and returns memoized value.
  let multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //! useCallback is a performance optimization hook which is used to avoid unessesary re-rendering of child components while sending non-primitive data as a props and returns memoized function.
  let display = useCallback(() => {
    console.log("Display Function");
  }, []);

  return (
    <div>
      <h1>Learn React Optimization</h1>
      <hr />
      <h1>Addition = {add}</h1>
      <button onClick={() => setAdd((prev) => prev + 1)}>increment</button>

      <hr />
      <h1>Substraction = {minus}</h1>
      <button onClick={() => setMinus((prev) => prev - 1)}>decrement</button>

      <hr />
      <h1>Muliplication = {multiply}</h1>

      <hr />
      <Child data={display} />
    </div>
  );
};

export default Optimization;
