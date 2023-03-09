import { useEffect } from "react";
import "../../index.css";

export const DarkMode = ({ isDark, setIsDark }) => {
  const handleToggled = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.className);
    setIsDark(isDark => !isDark)
  };

  useEffect(() => {
    if (localStorage.getItem("dark")) {
      document.body.classList.add("dark");
    }
  }, []);

  return (
    <label>
      <input className="darkInput" type="checkbox" onClick={handleToggled} />
      <span className="switch">
        <span className="handle" />
      </span>
    </label>
  );
};
