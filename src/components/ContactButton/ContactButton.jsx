import React from "react";
import { Button } from "./ContactButton.styled";

export const ContactButton = ({ text = "Button", setFormIsOpen }) => {
  return (
    <Button type="button" onClick={() => setFormIsOpen(true)}>
      {text}
    </Button>
  );
};
