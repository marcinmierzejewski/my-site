import styled from "styled-components";

export const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 22px;
  margin-left: 30px;
  color: var(--color-light);
  @media screen and (min-width: 480px) {
    font-size: 30px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
  > h3 {
    font-size: 1.4em;
    margin-bottom: 0.5em;
  }

  > ul > li > p {
    font-size: 1em;
    margin-bottom: 0.5em;
  }

  > ul {
    border-left: 2px solid var(--color-light);
    padding-left: 60px;
    > li:not(:last-child) {
      margin-bottom: 50px;
    }
    > li {
      > h4 {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          display: block;
          transform: rotate(45deg);
          width: 1em;
          height: 1em;
          top: 0.18em;
          left: calc(-60px + (-0.5em));
          background-color: var(--color-hover);
        }
      }
      > p {
        color: var(--color-hover);
        padding-left: 30px;
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 20px;
          height: 2px;
          top: 0.6em;
          left: 0;
          background-color: var(--color-hover);
        }
      }
    }
  }
`;
