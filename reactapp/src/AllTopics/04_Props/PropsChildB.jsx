const PropsChildB = (props) => {
  console.log(props); // {data : {str :"" , arr:[], obj:{}}}

  return (
    <div>
      <h1>Child B Component</h1>
      <h2>{props.data.str}</h2>
      <h2>{props.data.arr}</h2>
      <h2>{props.data.obj.fname}</h2>
    </div>
  );
};

export default PropsChildB;
