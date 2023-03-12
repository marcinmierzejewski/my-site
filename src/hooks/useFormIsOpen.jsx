import { useState } from "react";

export const useFormIsOpen = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return {
    formIsOpen,
    setFormIsOpen,
  };
};