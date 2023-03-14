import styled from "styled-components";

export const ModalOverlay = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(21, 57, 90, 0.3);
  border-radius: 10px;
  transition: all 250ms linear;
`;

export const Modal = styled.div`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 50px;
  height: 50%;
  width: 100%;
  background-color: ${(props) =>
    props.isDark ? "var(--color-dark)" : "var(--color-light)"};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  transition: all 250ms linear;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-100%)"};

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
  }
`;

export const CloseBtn = styled.button`
  color: ${(props) =>
    props.isDark ? "var(--color-light)" : "var(--color-dark)"};
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  margin-top: 15px;
  margin-right: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover {
    color: var(--color-accent);
  }
`;
