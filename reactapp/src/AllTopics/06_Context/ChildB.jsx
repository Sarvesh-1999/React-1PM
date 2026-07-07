import { useContext } from "react";
import { myStoreRoom } from "./ContextExample";
const ChildB = () => {
  let data = useContext(myStoreRoom);
  console.log(data);

  return (
    <div>
      <h1>Child B</h1>
    </div>
  );
};

export default ChildB;
