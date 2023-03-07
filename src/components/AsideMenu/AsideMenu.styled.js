import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  /* display: flex; */
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  z-index: 5;
  background: rgba(21, 57, 90, 0.3);
  border-radius: 10px;
`;

export const Modal = styled.div`
  
`;
