import Counter from "./Counter";
import { createContext, useState } from "react";

//! STEP 1
export const CounterContext = createContext();

//! STEP 2
const Practice = (props) => {
  console.log(props); // {children: {}}

  const [count, setCount] = useState(0);

  const handleIncre = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Context Practice</h1>

      <CounterContext.Provider value={{ count, handleIncre }}>
        {props.children}
      </CounterContext.Provider>
    </div>
  );
};
export default Practice;
