import React, { useState } from "react";
import Item from "./Item";

function List({ tasks, isDark, list }) {
  //   const [list, setList] = useState(tasks);

  //   function handleRemove(id) {
  //     const newList = list.filter((item) => item.id !== id);

  //     setList(newList);
  //   }

  //   const [displayed, setDisplayed] = useState(true);

  //   function deleteItem() {
  //     setDisplayed(!displayed);
  //   }

  const itemsToShow = list.map((task) => (
    <Item
      name={task.name}
      id={task.id}
      key={task.id}
      priority={task.priority}
      status={task.status}
      isDark={isDark}
      //   handleRemove={handleRemove}
    />
  ));

  const darkMode = isDark ? "listHeader dark" : "listHeader";

  return (
    <div className="listDiv">
      <div className={darkMode}>
        <span className="nameHeader">Task</span>
        <span>Priority</span>
        <span>Status</span>
        <span>Delete?</span>
      </div>

      <ul>{itemsToShow}</ul>
    </div>
  );
}

export default List;
