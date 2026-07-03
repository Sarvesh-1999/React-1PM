import { useState } from "react";
import LifeCycleInCBC from "./AllTopics/12_LifeCycle/LifeCycleInCBC";
import LifeCycleInFBC from "./AllTopics/12_LifeCycle/LifeCycleInFBC";
import FetchProducts from "./AllTopics/13_Fetch/FetchProducts";
import Reducer from "./AllTopics/14_Reducer/Reducer";
import Optimization from "./AllTopics/15_Optimization/Optimization";
import CSSExample from "./AllTopics/16_ReactCSS/CSSExample";
import HocExample from "./AllTopics/17_HOC/HocExample";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInCBC />} */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInFBC />} */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <FetchProducts />} */}

      {/* <Reducer /> */}

      {/* <Optimization /> */}

      {/* <CSSExample /> */}

      <HocExample />
    </>
  );
};

export default App;
