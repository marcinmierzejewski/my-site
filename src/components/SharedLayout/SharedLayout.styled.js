import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1280px;
  margin: 0 auto;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 24px;
  border-bottom: 1px solid black;

  > nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;    
  }

  @media screen and (min-width: 480px) {
    font-size: 30px;  
    justify-content: space-between;
  }
`

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
