import { SocialMediaBox } from "./SocialMedia.styled";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <SocialMediaBox>
          <li>
            <a
              href="https://www.facebook.com/marcin.mierzejewski.16/"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://github.com/marcinmierzejewski" target="_blank">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcin-mierzejewski-a85257221/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
        </SocialMediaBox>
  )
}