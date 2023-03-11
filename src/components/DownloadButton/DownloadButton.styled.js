import styled from "styled-components";

export const Download = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-family: inherit;
  font-size: 30px;
  font-weight: 400;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
  position: relative;
  transition: all 250ms linear;
  text-decoration: underline;
  margin-left: 35px;

  &:hover {
    box-shadow: 0 0 10px var(--color-accent);
    color: var(--color-accent);

    & img {
      transform: scale(1.2);
    }
  }

  > img {
    height: 20px;
    margin-right: 10px;
    transition: all 250ms linear;
  }
`;