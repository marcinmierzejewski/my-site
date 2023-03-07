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