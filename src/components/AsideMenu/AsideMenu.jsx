import { useEffect, useState } from "react";
import { ModalOverlay, Modal } from "./AsideMenu.styled";
import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { useItIsDark } from "../../hooks/useItIsDark";
import { useFormIsOpen } from "../../hooks/useFormIsOpen";
import { ContactForm } from "../ContactForm/ContactForm";

export const AsideMenu = ({ isOpen, setIsOpen }) => {
  // const initialDark = localStorage.getItem("dark") || false
  // const [isDark, setIsDark] = useState(initialDark)
  const { isDark, setIsDark } = useItIsDark();
  // const [formIsOpen, setFormIsOpen] = useState(false);
  const { formIsOpen, setFormIsOpen } = useFormIsOpen();

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
      <ModalOverlay
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(false);
          setFormIsOpen(false);
        }}
      />
      <Modal isOpen={isOpen} isDark={isDark}>
        <ContactButton text="Contact Me!" setFormIsOpen={setFormIsOpen} />
        <DarkMode isDark={isDark} setIsDark={setIsDark} />
        <ContactForm formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen} />
      </Modal>
    </>
  );
};
