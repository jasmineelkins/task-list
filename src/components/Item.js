import React, { useState } from "react";

function Item(props) {
  function changeClass() {
    // need to initialize & use state to change button color
    // even for hover? look it up..
  }

  return (
    <>
      <li className="task">
        <span>{props.name}</span>
        <span>{props.priority}</span>
        <span>{props.status}</span>
        <button onMouseOver={changeClass}>Delete</button>
      </li>
    </>
  );
}

export default Item;
