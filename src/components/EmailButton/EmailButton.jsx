import React from "react";
import { Button } from "./EmailButton.styled";

export const EmailButton = ({ icon = "", text = "Button" }) => {
  return (
    <Button type="button">
      <img src={icon} /> {text}
    </Button>
  );
};