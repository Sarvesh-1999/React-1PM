import { useState } from "react";

const StatesInFBC = () => {
  const [state, setState] = useState("Hiii");
  console.log(state);

  return (
    <div>
      <h1>StatesInFBC {state} </h1>
      <button
        onClick={() => {
          setState((prev) => (prev === "Hiii" ? "BYe" : "Hiii"));
        }}
      >
        change
      </button>
    </div>
  );
};

export default StatesInFBC;
