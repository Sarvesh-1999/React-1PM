import { useState } from "react";
import LifeCycleInCBC from "./AllTopics/12_LifeCycle/LifeCycleInCBC";

const App = () => {
  
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <div>
      <button onClick={handleToggle}>toggle me</button>

      {toggle && <LifeCycleInCBC />}
    </div>
  );
};

export default App;
