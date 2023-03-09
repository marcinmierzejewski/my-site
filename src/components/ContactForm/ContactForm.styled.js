import styled from "styled-components";

export const FormOverlay = styled.div`
  visibility: ${(props) => (props.formIsOpen ? "visible" : "hidden")};
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
`;

export const FormWrapper = styled.div`
  visibility: ${(props) => (props.formIsOpen ? "visible" : "hidden")};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: white;
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 3;
  transition: all 250ms linear;
  transform: ${(props) =>
    props.formIsOpen
      ? "translate(50%, 20%) scale(1)"
      : "translate(50%, 20%) scale(0)"};

  > form {
    display: block;
    max-width: 460px;
    margin: 0 auto;
    padding: 20px 40px;

    > label {
      display: block;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 20px;
      color: rgb(75, 62, 142);
      font-weight: 500;

      > input {
        display: block;
        width: 100%;
        height: 30px;
        margin-top: 5px;
        border: 2px solid rgba(188, 184, 184, 0.989);
        border-radius: 4px;
        padding-left: 20px;
        outline: none;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:focus {
          border: 2px solid rgb(75, 62, 142);
        }
      }
    }

    > button {
      border: none;
      display: block;
      margin: 0 auto;
      width: 200px;
      padding: 5px;
      margin-top: 30px;
      border-radius: 3px;
      cursor: pointer;
      box-shadow: 2px 2px 5px rgb(97, 92, 92);
      transition: all 250ms linear;
      font-weight: 500;
      &:active {
        transform: translate(2px, 2px);
        box-shadow: 0px 0px 3px rgb(97, 92, 92);
        background-color: rgb(146, 146, 214);
      }

      &:hover {
        background-color: rgb(146, 146, 214);
        color: white;
      }
    }
  }
`;
