import React from "react";
import { Download } from "./DownloadButton.styled";

export const DownloadButton = ({ icon = "", text = "Button" }) => {
  return (
    <Download type="button">
      <img src={icon} /> {text}
    </Download>
  );
};
