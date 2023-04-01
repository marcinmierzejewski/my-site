import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  @media screen and (min-width: 480px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  > h1 {
    font-size: 1.75em;
    margin-bottom: 0.5em;
  }

  > h2 {
    font-size: 1.15em;
    margin-bottom: 0.5em;
  }

  > p {
    font-size: 1em;
    margin-bottom: 0.5em;
  }
  > a {
    color: inherit;
    text-decoration: none;
  }
`

export const ButtonProjects = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-main);
  color: inherit;
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
  }

  > a {
    color: inherit;
    text-decoration: none;
  }

  > svg {
    margin-left: 10px;
  }
`;