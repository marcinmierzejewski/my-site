import { useState } from "react";

export const useItIsDark = () => {
  const initialDark = localStorage.getItem("dark") || false;
  const [isDark, setIsDark] = useState(initialDark);
  return {
    isDark,
    setIsDark,
  };
};
