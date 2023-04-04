import { useEffect } from "react";
import { ModalOverlay, Modal, CloseBtn } from "./AsideMenu.styled";
import { DarkMode } from "../DarkMode/DarkMode";
import { ContactButton } from "../ContactButton/ContactButton";
import { useItIsDark } from "../../hooks/useItIsDark";
import { useFormIsOpen } from "../../hooks/useFormIsOpen";
import { ContactForm } from "../ContactForm/ContactForm";
import { CgCloseR } from "react-icons/cg";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const AsideMenu = ({ isOpen, setIsOpen }) => {
  const { isDark, setIsDark } = useItIsDark();
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
        <CloseBtn
          isDark={isDark}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <CgCloseR size={30} />
        </CloseBtn>
        <ContactButton text="Contact Me!" setFormIsOpen={setFormIsOpen} />
        <DarkMode isDark={isDark} setIsDark={setIsDark} />
        <SocialMedia />
        <ContactForm formIsOpen={formIsOpen} setFormIsOpen={setFormIsOpen} />
      </Modal>
    </>
  );
};
