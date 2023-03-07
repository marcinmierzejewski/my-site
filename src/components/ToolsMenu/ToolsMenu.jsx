import { useState } from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { ToolsWrapper } from "./ToolsMenu.styled";

export const ToolsMenu = () => {
  const initialDark = localStorage.getItem("dark") || false;
  const [isDark, setIsDark] = useState(initialDark);
  return (
    <ToolsWrapper>
      <ContactButton text="Contact Me!" />
      <DarkMode isDark={isDark} setIsDark={setIsDark} />
    </ToolsWrapper>
  );
};
