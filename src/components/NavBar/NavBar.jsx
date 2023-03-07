import { Logo } from "../Logo/Logo";
import { ToolsMenu } from "../ToolsMenu/ToolsMenu";
import { Link, MoreBtn } from "./NavBar.styled";
import { AiOutlineMenu } from 'react-icons/ai';

export const NavBar = ({ setIsOpen }) => {
  return (
    <nav>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <Link to="/projects">Projects</Link>
        <Link to="/third">Layout3</Link>
      </div>
      <ToolsMenu />
      <MoreBtn onClick={() => setIsOpen(true)} type="button">
        <AiOutlineMenu size={35} />
      </MoreBtn>
    </nav>
  );
};
