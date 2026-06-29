import { useState, useEffect, useRef } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true); // {current : true}

  useEffect(() => {
    console.log("Component Mounted");

    // clean-up function executes during unmounting phase
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
};

export default LifeCycleInFBC;
