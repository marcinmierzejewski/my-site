import styled from "styled-components";

export const GoToBox = styled.button`
  position: fixed;
  display: block;
  bottom: 20px;
  right: 20px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  visibility: ${(props) => (props.isGoToVisible ? "visible" : "hidden")};
  > svg {
    color: var(--color-accent);
    height: 30px;
    width: 30px;
    &:hover {
      color: var(--color-hover);
    }
    @media screen and (min-width: 480px) {
      height: 40px;
      width: 40px;
    }
    @media screen and (min-width: 768px) {
      height: 50px;
      width: 50px;
    }
  }
`;
