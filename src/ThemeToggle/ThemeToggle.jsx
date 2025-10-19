import "./ThemeToggle.css";
import { useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "bg dark" : "bg light"}>
      {" "}
      <button onClick={toggleTheme}>{isDark ? "Light" : "Dark"}</button>{" "}
    </div>
  );
};

export default ThemeToggle;
