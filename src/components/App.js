import React, { useState } from "react";
import List from "./List";
import tasks from "../data/tasks";

function App() {
  return (
    <>
      <h1>Task List</h1>
      {/* <ul>List items go here:</ul> */}
      <List tasks={tasks} />
    </>
  );
}

export default App;

// objectives:
// basic styling...
// add button toggle dark mode
// header component
// delete button functionality - state
// delete button trash can icon
// dropdown/select priority - state
// toggle complete/incomplete - state
// filter by complete status - state
// filter by priority - state
// change color/background based on priority
// rank listing order based on priority
// edit tasks already in list - state + two way binding
// input field to add new task - state + two way binding
// ^ OR controlled form + submit to add task to DOM list... - state + two way binding?
// persistance ???????
