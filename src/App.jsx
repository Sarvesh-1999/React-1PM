import { useState } from "react";
import LifeCycleInCBC from "./AllTopics/12_LifeCycle/LifeCycleInCBC";
import LifeCycleInFBC from "./AllTopics/12_LifeCycle/LifeCycleInFBC";
import FetchProducts from "./AllTopics/13_Fetch/FetchProducts";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInCBC />} */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInFBC />} */}

      <button onClick={handleToggle}>toggle me</button>
      {toggle && <FetchProducts />}
    </>
  );
};

export default App;
