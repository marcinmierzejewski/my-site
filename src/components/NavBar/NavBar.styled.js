import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  transition: all 250ms linear;

  &:hover {
    color: var(--color-hover);
  }

  &.active {
    color: var(--color-accent);
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
    color: var(--color-accent)
  }

  @media screen and (min-width: 1024px) {
    display: none;
    visibility: hidden;
  }  
`