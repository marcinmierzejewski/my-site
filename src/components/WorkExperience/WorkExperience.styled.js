import styled from "styled-components";

export const WorkWrapper = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 22px;
  margin-left: 30px;
  background-color: #00000015;
  max-width: 1000px;
  border-radius: 15px;
  box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
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

  > ul > li > h4 {
    font-size: 1.2em;
    margin-bottom: 0.5em;
    position: relative;
    padding-left: 50px;
    color: var(--color-hover);
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 40px;
      height: 4px;
      top: 0.6em;
      left: 0;
      background-color: var(--color-hover);
    }
  }

  > ul > li > h5 {
    font-size: 1.1em;
    margin-bottom: 0.5em;
  }

  > ul > li > p {
    font-size: 1em;
    margin-bottom: 0.5em;
  }

  > ul {
    > li:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;
