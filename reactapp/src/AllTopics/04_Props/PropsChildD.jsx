const PropsChildD = (props) => {
  console.log(props); // {data : {str :"" , arr: [], obj:{fname:""}}}

  //   let { data:{str,arr,obj:{fname}} } = props
  let {
    str,
    arr,
    obj: { fname },
  } = props.data;

  return (
    <div>
      <h1>Child D Component</h1>
    </div>
  );
};

export default PropsChildD;
