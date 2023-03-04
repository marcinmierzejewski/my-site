import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-family: inherit;
  font-size: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: var(--color-accent);
  cursor: pointer;
  position: relative;
  transition: all 250ms linear;

  &:hover {
    box-shadow: 0 0 10px var(--color-accent);
  }

  > img {
    height: 20px;
    margin-right: 10px;
  }
`;
