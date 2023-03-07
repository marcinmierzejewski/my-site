import React from "react";
import { Button } from "./ContactButton.styled";

export const ContactButton = ({ text = "Button" }) => {
  return (
    <Button type="button">
      {text}
    </Button>
  );
};
