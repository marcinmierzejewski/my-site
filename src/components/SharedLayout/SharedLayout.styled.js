import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
