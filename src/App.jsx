import CBC from "./AllTopics/01_TypesOfComponents/CBC";
import FBC from "./AllTopics/01_TypesOfComponents/FBC";
import Counter from "./AllTopics/02_States/Counter";
import Ques from "./AllTopics/02_States/Ques";
import StatesInCBC from "./AllTopics/02_States/StatesInCBC";
import StatesInFBC from "./AllTopics/02_States/StatesInFBC";
import ToggleComponent from "./AllTopics/03_ConditionalRendering/ToggleComponent";
import PropsParent from "./AllTopics/04_Props/PropsParent";
import DrillingParent from "./AllTopics/05_PropsDrilling/DrillingParent";
import ContextExample from "./AllTopics/06_Context/ContextExample";
import Parent from "./AllTopics/06_Context/Parent";

const App = () => {
  return (
    <div>
      {/* <FBC /> */}
      {/* <CBC /> */}
      {/* <StatesInFBC /> */}
      {/* <Ques /> */}
      {/* <Counter /> */}
      {/* <StatesInCBC /> */}
      {/* <ToggleComponent /> */}
      {/* <PropsParent /> */}
      {/* <DrillingParent /> */}

      <ContextExample>
        <Parent />
      </ContextExample>

    </div>
  );
};

export default App;
