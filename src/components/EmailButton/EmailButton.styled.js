import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  font-family: inherit;
  font-size: 24px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background: var(--color-accent);
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 4px #00000026;
  fill: white;
  @media screen and (min-width: 480px) {
    font-size: 30px;
    padding: 5px 20px;
  }

  &:hover {
    box-shadow: 0 0 10px var(--color-accent);
    transition: all 250ms linear;

    & img {
  fill: white;

      transform: scale(1.2);
    }
  }

  > img {
    height: 20px;
    margin-right: 10px;
  }

  > a {
    color: inherit;
    text-decoration: none;
  }
`;
