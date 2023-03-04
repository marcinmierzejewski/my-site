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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  font-size: 30px;
  border-bottom: 1px solid black;

  > nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
`;
