const Ques = () => {
  let text = "Hii";

  const changeText = () => {
    text = "Byeee";
    console.log(text);
  };

  return (
    <div>
      <h1>Question {text}</h1>
      <button onClick={changeText}>change</button>
    </div>
  );
};
export default Ques;
