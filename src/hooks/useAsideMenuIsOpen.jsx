import { useState } from "react";

export const useAsideMenuIsOpen = () => {
  const [isOpen, setIsOpen] = useState(false)
  return {
    isOpen,
    setIsOpen,
  };
};