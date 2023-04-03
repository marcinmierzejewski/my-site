import { useEffect, useRef, useState } from "react";
import { Logo } from "../Logo/Logo";
import { ToolsMenu } from "../ToolsMenu/ToolsMenu";
import { NavigationWrapper, Link, LinkBox, MoreBtn } from "./NavBar.styled";
import { AiOutlineMenu } from "react-icons/ai";
import {
  HiOutlinePresentationChartBar,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const NavBar = ({ setIsOpen }) => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const handleScroll = () => {
    const { pageYOffset } = window;
    if (pageYOffset > lastScrollTop.current) {
      //downward scroll
      setIsNavbarVisible(false);
    } else if (pageYOffset < lastScrollTop.current) {
      //upward scroll
      setIsNavbarVisible(true);
    } // else was horizontal scroll
    lastScrollTop.current = pageYOffset;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavigationWrapper isNavbarVisible={isNavbarVisible}>
      <Link to="/">
        <Logo />
      </Link>
      <LinkBox>
        <Link to="/projects">
          Projects
          <HiOutlinePresentationChartBar />
        </Link>
        <Link to="/about">
          About
          <HiOutlineInformationCircle />
        </Link>
      </LinkBox>
      <ToolsMenu />
      <MoreBtn onClick={() => setIsOpen(true)} type="button">
        <AiOutlineMenu size={35} />
      </MoreBtn>
    </NavigationWrapper>
  );
};
