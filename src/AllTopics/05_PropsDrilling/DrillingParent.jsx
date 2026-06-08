import { useState } from "react";
import DrillingChildA from "./DrillingChildA";

const DrillingParent = () => {
  const [data, setData] = useState("");

  let str = "Hello React";
  let arr = [10, 20, 30];
  let obj = { name: "Rahul " };
  
  const getData = (value) => {
    alert(`GOT DATA ✅`);
    setData(value);
  };

  return (
    <div>
      <h1>Drilling Parent Component {data}</h1>

      <DrillingChildA str={str} arr={arr} obj={obj} getData={getData} />
    </div>
  );
};
export default DrillingParent;
