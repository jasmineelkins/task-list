import React, { useState } from "react";
import List from "./List";
import Item from "./Item";

function Input(props) {
  const [newTask, setNewTask] = useState("");

  function handleInput(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.addItem(newTask);

    setNewTask("");
  }

  return (
    <>
      <div className="">
        <form className="newTask">
          <label>
            Task:
            <input
              type="text"
              name="task"
              onChange={(e) => handleInput(e)}
              value={newTask}
            ></input>
          </label>

          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Add to List
          </button>
        </form>
      </div>
    </>
  );
}

export default Input;
