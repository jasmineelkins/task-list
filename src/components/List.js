import React, { useState } from "react";
import Item from "./Item";

function List({ tasks }) {
  const itemsToShow = tasks.map((task) => (
    <Item
      name={task.name}
      key={task.id}
      priority={task.priority}
      status={task.status}
    />
  ));

  return (
    <>
      <ul>{itemsToShow}</ul>
    </>
  );
}

export default List;
