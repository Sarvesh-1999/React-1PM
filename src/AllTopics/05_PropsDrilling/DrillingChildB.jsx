const DrillingChildB = (props) => {
  console.log(props); // {str : "Hello React" , arr:[] , obj:{} , getData:f}

  let { str, arr, obj, getData } = props;

  return (
    <div>
      <h1>Drilling Child B Component</h1>
      <h3>String is {str}</h3>
      <h3>Array is {arr}</h3>
      <h3>Object is {obj.name}</h3>
      <button onClick={() => getData("Hii Parent")}>SEND</button>
    </div>
  );
};
export default DrillingChildB;
