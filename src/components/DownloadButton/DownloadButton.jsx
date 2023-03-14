import React from "react";
import { Download } from "./DownloadButton.styled";
import CV from "../../../public/CV.pdf";
import { HiOutlineDownload } from "react-icons/hi";

export const DownloadButton = ({ text = "Button" }) => {
  return (
    <Download type="button">
      <HiOutlineDownload className="download-icon"/>
      <a href={CV} download>
        {text}
      </a>
    </Download>
  );
};
