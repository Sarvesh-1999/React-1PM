import DrillingChildB from "./DrillingChildB";

const DrillingChildA = (props) => {
  console.log(props); // {str : "Hello React" , arr:[] , obj:{} , getData:f}
  let { str, arr, obj, getData } = props;

  return (
    <div>
      <h1>Drilling Child A Component</h1>

      <DrillingChildB str={str} arr={arr} obj={obj} getData={getData} />
    </div>
  );
};
export default DrillingChildA;
