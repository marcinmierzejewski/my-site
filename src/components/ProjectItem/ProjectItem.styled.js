import styled from "styled-components";

export const ProjectContent = styled.div`
  background-color: red;
  padding: 30px;
`;

export const ProjectWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* width: 560px; */
  width: 80vw;
  max-width: 540px;
  /* height: 300px; */
  background-color: var(--color-content);
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 300px;
    /* width: 100%; */
  }
`;

export const ImageBox = styled.div`
  overflow: hidden;
  height: 250px;
  width: 90%;
  max-width: 500px;
  margin-top: -25px;
  border-radius: 16px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: -25px;
    width: 200px;
  }
`;

export const ProjectImage = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ContentBox = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  width: 70%;
  /* width: 100%; */
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  > div {
    text-align: center;
  }

  > h3 {
    padding-top: 30px;
    font-size: 24px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  > button {
    color: inherit;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    background: var(--color-accent);
    cursor: pointer;
    transition: all 250ms linear;
    box-shadow: 0 4px 4px #00000026;
    &:hover {
      box-shadow: 0 0 10px var(--color-accent);
    }

    > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: inherit;

      > svg {
        margin-right: 10px;
      }
    }
  }
`;
