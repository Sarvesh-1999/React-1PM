import React from "react";

const Child = () => {
  console.log("I am Child");

  return <div>Child</div>;
};

export default React.memo(Child);
