import React, { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true); // {current : true}

  useEffect(() => {
    console.log("MOUNTED");
    return () => {
      console.log("UNMOUNTED");
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    console.log("UPDATED");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>incremnet</button>
    </div>
  );
};

export default LifeCycleInFBC;
