import styled from "styled-components";
import heroImg from "./hero2.jpg";

export const HeroWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const HeroLeft = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
    text-align: left;
    justify-content: left;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  > h1,
  h2 {
    font-family: var(--font-second);
    font-size: 40px;
    line-height: 120%;
    position: relative;
    z-index: 1;
    @media screen and (min-width: 480px) {
      font-size: 70px;
    }
    @media screen and (min-width: 768px) {
      width: 650px;
      font-size: 100px;
    }
  }

  > h2 {
    font-size: 30px;
    line-height: 120%;
    font-weight: 500;
    @media screen and (min-width: 480px) {
      font-size: 50px;
    }
    @media screen and (min-width: 768px) {
      font-size: 80px;
    }
  }

  > h3 {
    font-size: 28px;
    line-height: 120%;
    font-weight: 500;
    margin-top: 30px;
    @media screen and (min-width: 480px) {
      font-size: 36px;
    }
    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
  }

  > p {
    font-size: 22px;
    line-height: 180%;
    opacity: 0.5;
    @media screen and (min-width: 480px) {
      font-size: 26px;
    }
    @media screen and (min-width: 768px) {
      font-size: 30px;
    }
  }
`;

export const HeroRight = styled.div`
  background-color: red;
  display: none;
  /* height: 300px; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-image: url(${heroImg});
  filter: sepia(60%);

  @media screen and (min-width: 768px) {
    display: block;
    width: 50%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media screen and (min-width: 480px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 768px) {
    justify-content: left;
    margin-bottom: 0;
  }
`;
