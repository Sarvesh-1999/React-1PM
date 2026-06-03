import { createContext } from "react";

export const ContextObject = createContext();

const ContextExample = (props) => {
  console.log(props); // { children : {} }

  let str = "Hello";
  let arr = [10, 20, 30];
  let obj = { name: "John" };

  return (
    <ContextObject.Provider value={{ str, arr, obj }}>
      {props.children}
    </ContextObject.Provider>
  );
};

export default ContextExample;
