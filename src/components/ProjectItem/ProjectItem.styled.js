import styled from "styled-components";

export const ProjectContent = styled.div`
  padding: 30px;
  /* color: var(--color-dark); */
`;

export const ProjectWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  max-width: 540px;
  background-color: var(--color-content);
  border-radius: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 300px;
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
  width: 100%;
  min-height: 300px;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    width: 65%;
    text-align: left;
  }

  > h3 {
    padding-top: 30px;
    font-size: 30px;
    letter-spacing: 0.03rem;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  padding-bottom: 20px;
  > button {
    color: inherit;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 20px;
    border: none;
    border-radius: 20px;
    width: 120px;
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
