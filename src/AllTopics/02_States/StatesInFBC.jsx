import { useState } from "react";

const StatesInFBC = () => {
  const [state, setState] = useState("Hii Everyone");
  const [data, setData] = useState(10);

  const handleBtn = () => {
    setState("Byee Everyone");
  };

  const handleData = () => {
    setData(5000);
  };

  return (
    <div>
      <h1>Learn States In Function Based</h1>

      <h2>{state}</h2>
      <button onClick={handleBtn}>update</button>

      <h2>{data}</h2>
      <button onClick={handleData}>change</button>
    </div>
  );
};

export default StatesInFBC;
