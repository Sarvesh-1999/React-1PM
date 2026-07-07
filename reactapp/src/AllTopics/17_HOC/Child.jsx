import Child2 from "./Child2";
import Hoc from "./Hoc";

const Child = (props) => {
  console.log(props);

  return (
    <div>
      <h1>I am Child Component</h1>

      <Child2 />
    </div>
  );
};

export default Hoc(Child);
