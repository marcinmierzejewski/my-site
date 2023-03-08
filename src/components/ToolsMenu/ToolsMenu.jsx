import { useState } from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { ToolsWrapper } from "./ToolsMenu.styled";
import { useItIsDark } from "../../hooks/useItIsDark";

export const ToolsMenu = () => {
  // const initialDark = localStorage.getItem("dark") || false;
  // const [isDark, setIsDark] = useState(initialDark);
  const { isDark, setIsDark } = useItIsDark();

  return (
    <ToolsWrapper>
      <ContactButton text="Contact Me!" />
      <DarkMode isDark={isDark} setIsDark={setIsDark} />
    </ToolsWrapper>
  );
};
