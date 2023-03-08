import styled from "styled-components";

export const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
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
`;

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  /* display: flex; */
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 30px;
  height: 50%;
  width: 100%;
  background-color: ${(props) => (props.isDark ? "var(--color-dark)" : "var(--color-light)")};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  transition: all 250ms linear;
  transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-100%)")};

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};

  }  
`;
