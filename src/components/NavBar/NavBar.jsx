import { Logo } from "../Logo/Logo";
import { ToolsMenu } from "../ToolsMenu/ToolsMenu";
import { Link, LinkBox, MoreBtn } from "./NavBar.styled";
import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export const NavBar = ({ setIsOpen }) => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <LinkBox>
        <Link to="/projects">
          Projects
          <HiOutlinePresentationChartBar />
        </Link>
        <Link to="/third">Layout3</Link>
      </LinkBox>
      <ToolsMenu />
      <MoreBtn onClick={() => setIsOpen(true)} type="button">
        <AiOutlineMenu size={35} />
      </MoreBtn>
    </nav>
  );
};
