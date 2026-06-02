import PropsChildA from "./PropsChildA";
import PropsChildB from "./PropsChildB";
import PropsChildC from "./PropsChildC";
import PropsChildD from "./PropsChildD";

const PropsParent = () => {
  let str = "Hello World";
  let obj = { fname: "John" };
  let arr = [10, 20, 30, 40, 50];

  return (
    <div>
      <h1>Learn Props in React</h1>

      <hr />

      {/* sending multiple props */}
      <PropsChildA str={str} obj={obj} arr={arr} />

      <hr />

      {/* sending single prop with multiple data */}
      <PropsChildB data={{ str, obj, arr }} />

      <hr />

      {/* simple object destructuring example */}
      <PropsChildC str={str} obj={obj} arr={arr} />

      <hr />

      {/* nested object destructuring example */}
      <PropsChildD data={{ str, obj, arr }}/>
    </div>
  );
};

export default PropsParent;
