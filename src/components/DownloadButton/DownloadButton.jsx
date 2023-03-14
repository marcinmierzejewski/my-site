import React from "react";
import { Download } from "./DownloadButton.styled";
import CV from "../../../public/CV.pdf";

export const DownloadButton = ({ icon = "", text = "Button" }) => {
  return (
    <Download type="button">
      <img src={icon} />
      <a href={CV} download>
        {text}
      </a>
    </Download>
  );
};
