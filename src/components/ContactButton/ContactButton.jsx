import React from "react";
import { Button } from "./ContactButton.styled";

export const ContactButton = ({ icon = "", text = "Button" }) => {
  return (
    <Button type="button">
      <img src={icon} /> {text}
    </Button>
  );
};
