import React, { useState } from "react";
import List from "./List";
import Header from "./Header";
import Input from "./Input";
import tasks from "../data/tasks";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [list, setList] = useState(tasks);

  function handleAddItem(itemName) {
    const newList = [...list, { name: itemName }];
    setList(newList);
  }

  function toggleDarkMode() {
    setIsDark(!isDark);
    console.log("clicked");
  }

  //   const darkMode = isDark ? "App dark" : "";

  return (
    <>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Input addItem={handleAddItem} />
      <List tasks={tasks} isDark={isDark} list={list} />
    </>
  );
}

export default App;

// objectives:
// basic styling...
// ✔️ add button toggle dark mode
// ✔️ header component
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
