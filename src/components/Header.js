import React, { useState } from "react";
// import List from "./List";

function Header({ isDark, toggleDarkMode }) {
  const buttonText = isDark ? "Dark Mode" : "Light Mode";
  //   const darkMode = isDark ? <List mode="dark" /> : <List mode="dark" />;

  return (
    <div className="header">
      <h1>Task List</h1>

      <div>
        <button onClick={toggleDarkMode}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Header;
