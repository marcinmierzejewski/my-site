import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { ToolsWrapper } from "./ToolsMenu.styled";

export const ToolsMenu = () => {
  return (
    <ToolsWrapper>
      <ContactButton text="Contact Me!" />
      <DarkMode />
    </ToolsWrapper>
  );
};
