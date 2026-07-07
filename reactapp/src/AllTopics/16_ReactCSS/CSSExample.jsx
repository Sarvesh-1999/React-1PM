import React from "react";
import style from "./cssExample.module.css";

const CSSExample = () => {
  return (
    <div id={style.wrapper}>
      <h1 style={{ color: "red", backgroundColor: "black" }}>
        Example of Inline CSS
      </h1>

      <div className="container">Example of Global CSS</div>

      <h2 id={style.heading}>Hello World</h2>

      <p className={style.para}>Lorem ipsum dolor sit amet.</p>

      {/* TAILWIND EXAMPLE */}

      <h1 className="bg-red-600 text-white sm:bg-orange-500 md:bg-yellow-300 lg:bg-pink-500 xl:bg-purple-700">
        Style using Tailwind
      </h1>


      
    </div>
  );
};

export default CSSExample;
