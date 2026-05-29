import { useState } from "react";

const ToggleComponent = () => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () =>
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });

  console.log(theme);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        height: "100vh",
      }}
    >
      <h1>Learn Conditional Rendering</h1>
      <button onClick={handleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default ToggleComponent;
