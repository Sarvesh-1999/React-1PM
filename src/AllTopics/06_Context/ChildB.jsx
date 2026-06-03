import { useContext } from "react";
import { ContextObject } from "./ContextExample";
const ChildB = () => {
  let { str, arr, obj } = useContext(ContextObject);

  return (
    <div>
      <h1>Child B</h1>
      <h4>
        {str} {arr} {obj.name}
      </h4>
    </div>
  );
};

export default ChildB;
