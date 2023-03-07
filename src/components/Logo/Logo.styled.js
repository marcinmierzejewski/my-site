import styled from "styled-components";
import "../../index.css";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainLogo = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    font-size: 28px;
    font-weight: 700;
    color: #000000;
  }
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`;

export const LogoSpecial = styled.span`
  font-size: 45px;
  color: var(--color-light);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: -3px;
    width: 50px;
    height: 50px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 30px;
    background-color: var(--color-accent);
    box-shadow: 0 0 10px var(--color-accent);
    z-index: -1;
  }
`;
