import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-family: inherit;
  font-size: 30px;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  background: var(--color-accent);
  /* margin-right: 0px; */
  cursor: pointer;
  position: relative;
  transition: all 250ms linear;
  box-shadow: 0 4px 4px #00000026;
  @media screen and (min-width: 1024px) {
    margin-right: 25px;
    }

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
