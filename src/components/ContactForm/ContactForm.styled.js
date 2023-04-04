import styled from "styled-components";
import { ToastContainer } from "react-toastify";

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
  width: 340px;
  padding: 20px;
  background-color: var(--color-dark);
  color: #ffffff;
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 3;
  transition: all 250ms linear;
  transform: ${(props) =>
    props.formIsOpen
      ? "translate(50%, 10%) scale(1)"
      : "translate(50%, 10%) scale(0)"};

  @media screen and (min-width: 480px) {
    right: 50%;
    width: 380px;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    right: 100%;
    width: 560px;
    padding: 40px;
  }

  @media screen and (min-width: 1024px) {
    right: 50%;
  }

  > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 40px;
    margin: 0 auto;

    > p {
      font-size: 36px;
    }
  }
`;

export const FormBoxText = styled.div`
  position: relative;
  width: 100%;
  > input {
    height: 56px;
    width: 284px;
    padding: 0;
    padding-left: 16px;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-color: ${(props) =>
      props.isActive ? "var(--color-accent)" : "rgba(255, 255, 255, 0.75)"};
    border-radius: 8px;
    outline: none;
    background: transparent;
    color: #f9f9f9;
    font-family: inherit;
    font-size: 22px;
    &:focus {
      border-color: var(--color-accent);
      ~ span {
        color: #f9f9f9;
      }
      ~ label {
        background: var(--color-dark);
        color: rgba(255, 255, 255, 0.75);
        translate: 0 -50px;
      }
    }

    @media screen and (min-width: 480px) {
      width: 324px;
    }

    @media screen and (min-width: 768px) {
      width: 484px;
    }
  }

  label,
  span {
    position: absolute;
    top: 50%;
    pointer-events: none;
    transition: 0.3s;
  }

  > label {
    left: 10px;
    font-size: 22px;
    translate: ${(props) => (props.isActive ? "0 -50px" : "0 -50%")};
    background: ${(props) =>
      props.isActive ? "var(--color-dark)" : "transparent"};
    color: ${(props) =>
      props.isActive ? "rgba(255, 255, 255, 0.75)" : "#f9f9f9"};
    padding: 4px 8px;
  }

  > span {
    right: 16px;
    font-size: 28px;
    translate: 0 -50%;
    color: ${(props) => (props.isActive ? "#f9f9f9" : "#888888")};
    display: flex;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: inherit;
  font-family: inherit;
  width: 200px;
  font-size: 30px;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  background: ${(props) =>
    props.isAvailable ? "var(--color-accent)" : "rgba(255, 255, 255, 0.3)"};
  pointer-events: ${(props) => (props.isAvailable ? "auto" : "none")};
  cursor: pointer;
  position: relative;
  transition: all 250ms linear;
  box-shadow: 0 4px 4px #00000026;

  &:hover {
    box-shadow: 0 0 10px var(--color-accent);
    & img {
      transform: scale(1.2);
    }
  }

  > img {
    height: 20px;
    margin-right: 10px;
  }
`;

export const CloseBtn = styled.button`
  color: var(--color-light);
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
  > svg {
    height: 30px;
    width: 30px;
  }
`;

export const NotificationBox = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    max-width: 100%;
  }
  .Toastify__toast {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    background: var(--color-hover);
  }
`;
