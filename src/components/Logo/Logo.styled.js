import styled from "styled-components";

export const MainLogo = styled.span`
font-size: 38px;
color: #000000;

> span {
  font-size: 45px;
  color: #ffffff;
  position: relative;

  &::after{
    content: "";
    position: absolute;
    top: 0;
    left: -3px;
    width: 50px;
    height: 65px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 30px;
    background-color: orangered;
    box-shadow: 0 0 10px orangered;
    z-index: -1;

  }
}
`