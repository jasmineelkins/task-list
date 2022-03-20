import React, { useState } from "react";

function Item({ isDark, name, status, priority, id, handleRemove }) {
  const [hovered, setHovered] = useState(false);

  function toggleHover() {
    setHovered(!hovered);
  }

  const darkMode = isDark ? "task dark" : "task";
  //   const darkBtn = isDark ? "dark" : "";
  //  still need to update buttons for dark mode

  return (
    <>
      <li className={darkMode}>
        <span className="taskName">{name}</span>
        <span>{priority}</span>
        <span>{status}</span>
        <button
          className={hovered ? "hovering" : ""}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          //   onClick={handleRemove(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default Item;
