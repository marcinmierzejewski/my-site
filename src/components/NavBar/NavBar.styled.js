import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: auto;
  z-index: 4;
  backdrop-filter: blur(10px);
  transition: all 250ms linear;
  transform: ${(props) =>
    props.isNavbarVisible ? "translateY(0)" : "translateY(-90px)"};
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: all 250ms linear;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: var(--color-hover);
  }

  &.active {
    color: var(--color-accent);
  }

  > svg {
    margin-left: 5px;
  }
`;

export const MoreBtn = styled.button`
  display: block;
  background-color: transparent;
  color: inherit;
  outline: none;
  border: none;
  cursor: pointer;
  width: 50px;
  margin-right: 15px;
  transition: all 250ms linear;

  &:hover {
    color: var(--color-accent);
  }

  @media screen and (min-width: 1024px) {
    display: none;
    visibility: hidden;
  }
`;
