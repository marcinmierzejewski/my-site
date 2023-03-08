import { useState } from "react";
import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { ToolsWrapper } from "./ToolsMenu.styled";
import { useItIsDark } from "../../hooks/useItIsDark";
import { ContactForm } from "../ContactForm/ContactForm";

export const ToolsMenu = () => {
  // const initialDark = localStorage.getItem("dark") || false;
  // const [isDark, setIsDark] = useState(initialDark);
  const { isDark, setIsDark } = useItIsDark();
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <ToolsWrapper>
      <ContactButton text="Contact Me!" setFormIsOpen={setFormIsOpen} />
      <DarkMode isDark={isDark} setIsDark={setIsDark} />
      <ContactForm formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen}/>
    </ToolsWrapper>
  );
};
