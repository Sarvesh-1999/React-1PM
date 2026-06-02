const PropsChildC = (props) => {
    console.log(props); // {str:"" , arr:[] , obj:{fname : ""}}
    let {str , arr , obj:{fname}} = props
    
  return (
    <div>
      <h1>Child C Component</h1>
      <h2>{str}  {arr}  {fname}</h2>
    </div>
  );
};

export default PropsChildC;
