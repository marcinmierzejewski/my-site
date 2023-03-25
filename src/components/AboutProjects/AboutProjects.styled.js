import styled from "styled-components";

export const StatisticBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  font-family: var(--font-second);
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    margin-left: 50px;
  }
  > li {
    font-size: 26px;
    min-width: 260px;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      min-width: 320px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 40px;
    }
    > p:nth-child(even) {
      color: var(--color-accent);
      font-size: 40px;
      @media screen and (min-width: 768px) {
        font-size: 56px;
      }
      @media screen and (min-width: 1024px) {
      font-size: 60px;
    }
    }
  }
`;

export const SwiperBox = styled.div`
  max-width: 100%;
  height: 800px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    min-width: 600px;
    }
`;
