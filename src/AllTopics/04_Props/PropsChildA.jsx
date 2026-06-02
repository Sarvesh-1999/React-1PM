const PropsChildA = (props) => {
  console.log(props); // {str : "" , obj:{} , arr:[]}

  return (
    <div>
      <h1>Child A Component</h1>
      <h2>{props.str}</h2>
      <h2>{props.obj.fname}</h2>
      <h2>{props.arr}</h2>
    </div>
  );
};
export default PropsChildA;
