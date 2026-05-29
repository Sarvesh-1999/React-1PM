import { useState } from "react";

const Ques = () => {
  const [text, setText] = useState("Hii");

  const changeText = () => {
    setText("Byeee");
  };

  return (
    <div>
      <h1>Question {text}</h1>
      <button onClick={changeText}>change</button>
    </div>
  );
};
export default Ques;
