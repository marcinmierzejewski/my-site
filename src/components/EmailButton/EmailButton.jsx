import React from "react";
import { Button } from "./EmailButton.styled";
import { HiOutlineMail } from "react-icons/hi";

export const EmailButton = ({ text = "Button" }) => {
  return (
    <Button type="button">
      <HiOutlineMail />
      <a href="mailto:mierzejewski2you@gmail.com">{text}</a>
    </Button>
  );
};
