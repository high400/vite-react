import React, { useState } from "react";
import "./List.css";
import Quang_trung from "./Quang_Trung_1.png";
import sarugami from "./Sarugami_Armor_1.png";

function List() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };



  return (
    <div className="List">
      <header className="List-header">
        <img src={Quang_trung} alt="logo" />
      </header>
      <body>
        <p>The count is: {count} </p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </body>
    </div>
  );
}

export default List;
