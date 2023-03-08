import { useEffect, useState } from "react";
import { ModalOverlay, Modal } from "./AsideMenu.styled";
import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { useItIsDark } from "../../hooks/useItIsDark";

export const AsideMenu = ({ isOpen, setIsOpen }) => {
  // const initialDark = localStorage.getItem("dark") || false
  // const [isDark, setIsDark] = useState(initialDark)
  const { isDark, setIsDark } = useItIsDark();

  useEffect(() => {
    const close = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [isOpen]);

  return (
    <>
      <ModalOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Modal isOpen={isOpen} isDark={isDark}>
        <DarkMode isDark={isDark} setIsDark={setIsDark} />
        <ContactButton text="Contact Me!" />
      </Modal>
    </>
  );
};
