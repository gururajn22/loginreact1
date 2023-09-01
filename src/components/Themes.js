import React, { useEffect, useState } from "react";
// import "./index.css";
const Themes = () => {
  const [theme, setTheme] = useState(true);

  const toggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    console.log("useEffect called");
  },[theme]);
  return <div>
    <button onClick={toggle}>Select the theme</button>
  </div>;
};

export default Themes;
