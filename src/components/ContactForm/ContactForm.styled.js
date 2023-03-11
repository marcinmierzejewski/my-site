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
  width: 500px;  
  padding: 40px;
  background-color: var(--color-dark);
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 3;
  transition: all 250ms linear;
  transform: ${(props) =>
    props.formIsOpen
      ? "translate(50%, 10%) scale(1)"
      : "translate(50%, 10%) scale(0)"};

  > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 40px;
    margin: 0 auto;
  }
/* 
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
    } */
  /* } */
`;

export const FormBoxText = styled.div`
  position: relative;
  width: 100%;
  > input {
    height: 56px;
    width: 484px;
    padding:0;
    padding-left: 16px;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-color: ${(props) => (props.isActive ? "var(--color-accent)" : "rgba(255, 255, 255, 0.75)")};
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
    background: ${(props) => (props.isActive ? "var(--color-dark)" : "transparent")};
    color: ${(props) => (props.isActive ? "rgba(255, 255, 255, 0.75)" : "#f9f9f9")};
    padding: 4px 8px;
  }

  > span {
    right: 16px;
    font-size: 28px;
    translate: 0 -50%;
    color: ${(props) => (props.isActive ? "#f9f9f9" : "#888888")};
  }
`

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
  background: var(--color-accent);
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