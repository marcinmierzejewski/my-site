import styled from "styled-components";
import heroImg from "./hero2.jpg";

export const HeroWrapper = styled.div`
  display: flex;
  text-align: left;
  justify-content: left;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px 50px;
  
`;

export const HeroLeft = styled.div`
width: 50%;
padding-top: 50px;
padding-bottom: 50px;

> h1, h2 {
  font-family: 'Playfair Display';
  width: 900px;
  font-size: 100px;
  line-height: 120%;
  position: relative;
  z-index: 1;
}

> h2 {
  font-size: 80px;
  line-height: 120%;
  font-weight: 500;
}

> h3 {
  font-size: 60px;
  line-height: 120%;
  font-weight: 500;
  margin-top: 30px;
}

> p {
  font-size: 30px;
  line-height: 180%;
  opacity: 0.5;
}

`
export const HeroRight = styled.div`
  background-color: red;
  width: 50%;
  /* height: 300px; */
  background-size: cover;
  background-repeat:no-repeat;
  background-position: 50% 50%;
  background-image: url(${heroImg});
  filter: sepia(60%);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`