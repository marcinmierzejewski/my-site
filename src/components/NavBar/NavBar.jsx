import { Logo } from "../Logo/Logo";
import { ToolsMenu } from "../ToolsMenu/ToolsMenu";
import { Link } from "./NavBar.styled";

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
      <button onClick={() => setIsOpen(true)} type="button">
        open
      </button>
    </nav>
  );
};
