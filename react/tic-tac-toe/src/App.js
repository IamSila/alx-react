import React from "react";
import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }


  return <button className="board-row" onClick={handleClick}></button>;
}

export default function Board() {
  return (
    <>
      <div>
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>

      <div>
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>

      <div>
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>

    </>
  );
}
