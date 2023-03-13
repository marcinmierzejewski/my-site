import styled from "styled-components";
import heroImg from "./hero2.jpg";

export const HeroWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px 50px;
`;

export const HeroLeft = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    width: 50%;
    text-align: left;
    justify-content: left;
  }

  > h1,
  h2 {
    font-family: "Playfair Display";
    font-size: 70px;
    line-height: 120%;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      width: 650px;
      font-size: 100px;
    }
  }

  > h2 {
    font-size: 50px;
    line-height: 120%;
    font-weight: 500;
    @media screen and (min-width: 768px) {
      font-size: 80px;
    }
  }

  > h3 {
    font-size: 36px;
    line-height: 120%;
    font-weight: 500;
    margin-top: 30px;
    @media screen and (min-width: 768px) {
      font-size: 60px;
    }
  }

  > p {
    font-size: 22px;
    line-height: 180%;
    opacity: 0.5;
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
  justify-content: center;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;
