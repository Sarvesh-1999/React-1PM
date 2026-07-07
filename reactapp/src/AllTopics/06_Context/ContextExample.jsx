import { createContext } from "react";
import Parent from "./Parent";

// CONTEXT OBJECT
export const myStoreRoom = createContext();

const ContextExample = (props) => {
  console.log(props);

  let str = "Hello";
  let arr = [10, 20, 30];
  let obj = { name: "John" };
  return (
    <div>
      <myStoreRoom.Provider value={{ arr, str, obj }}>
        {props.children}
      </myStoreRoom.Provider>
    </div>
  );
};
export default ContextExample;
