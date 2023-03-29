import styled from "styled-components";

export const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  > div {
    margin-bottom: 80px;
    width: 50%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    > div {
      margin-bottom: 0;
      margin-left: 80px;
    }
  }
`;

export const ConnectText = styled.div`
  font-size: 40px;
  line-height: 1.2;
  margin-bottom: 20px;
  @media screen and (min-width: 480px) {
    font-size: 70px;
  }
  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`;
export const SocialMedia = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 260px;

  > li {
    > svg {
      width: 24px;
      height: 24px;
      transition: all 250ms linear;
      cursor: pointer;
      @media screen and (min-width: 480px) {
        width: 40px;
        height: 40px;
      }

      &:hover {
        color: var(--color-hover);
      }
    }
  }
`;

export const ConnectForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 260px;
  font-size: 36px;
  color: var(--color-light);
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 60px;
  width: 100%;

  > input {
    height: 70px;
    font-size: 30px;
    outline: none;
    border: none;
    background: transparent;
    color: var(--color-light);
    padding-left: 16px;
    transition: all 250ms linear;

    &:focus {
      ~ label {
        font-size: 30px;
      }
    }
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => (props.isActive ? "#ffffff" : "grey")};
    z-index: 5;
  }

  > textarea {
    height: 140px;
  }

  > label {
    display: block;
    position: absolute;
    /* font-size: 22px; */
    top: -30px;
    left: 0;
    color: ${(props) => (props.isActive ? "var(--color-hover)" : "inherit")};
    font-size: ${(props) => (props.isActive ? "30px" : "26px")};
    transition: all 250ms linear;
  }
`;
