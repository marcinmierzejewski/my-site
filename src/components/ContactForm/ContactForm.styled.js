import styled from "styled-components";

export const FormOverlay = styled.div`
  display: ${(props) => (props.formIsOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(21, 57, 90, 0.3);
`;

export const FormWrapper = styled.div`
  display: ${(props) => (props.formIsOpen ? "flex" : "none")};
  width: 300px;
  height: 300px;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
`
