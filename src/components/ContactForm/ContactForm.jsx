import { useEffect } from "react";
import { FormOverlay, FormWrapper } from "./ContactForm.styled"

export const ContactForm = ({formIsOpen, setFormIsOpen}) => {
  
  useEffect(() => {
    const close = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        setFormIsOpen(false);
      }
    };
    if (formIsOpen) {
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [formIsOpen]);

  return (
    <>
    <FormOverlay formIsOpen={formIsOpen} onClick={() => setFormIsOpen(false)}/>
     <FormWrapper formIsOpen={formIsOpen}>
      Form Content
     </FormWrapper>
    </>
    
  )
}