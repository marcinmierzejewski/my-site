import styled from "styled-components";

export const ExperienceBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const YearsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 550px;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    width: 200px;
  }
`;

export const Years = styled.p`
  font-size: 100px;
  color: var(--color-accent);
  font-family: var(--font-second);

  margin-right: 60px;
  display: block;
  text-align: center;
  position: relative;
  width: 50px;
  > svg {
    height: 60px;
    position: absolute;
    top: 40px;
    left: 15px;
  }

  @media screen and (min-width: 480px) {
    font-size: 120px;
  }
`;

export const ExperienceYears = styled.ul`
  display: flex;
  font-size: 26px;
  flex-grow: 3;
  /* max-width: 280px; */
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  font-family: var(--font-second);
  /* margin-bottom: 20px; */
  @media screen and (min-width: 480px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1024px) {
    justify-content: flex-start;
    font-size: 40px;
  }

  > li:not(:last-child) {
    margin-right: 5px;
  }
`;

export const ExperienceContent = styled.div`
  /* flex-grow: 3; */
  > h3 {
    font-size: 22px;
    @media screen and (min-width: 480px) {
      font-size: 26px;
    }
    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
    @media screen and (min-width: 1024px) {
      font-size:40px;
    }
  }
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    flex-wrap: wrap;
    gap: 15px;
    color: var(--color-dark);
    > li {
      width: 230px;
      height: 230px;
      font-size: 22px;
      padding: 20px;
      background-color: var(--color-accent);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      box-shadow: 0 0 10px var(--color-accent);
      &:hover div {
        transform: translateX(105%);
      }
      
      > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        font-size: 20px;
        transform: translateX(0);
        background-color: rgb(127,127,127);
        transition: all 500ms cubic-bezier(0.215, 0.610, 0.355, 1);
      }
    }
  }
`;
