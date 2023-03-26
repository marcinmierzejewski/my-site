import styled from "styled-components";

export const StatisticBox = styled.div`
  display: flex;
  flex-direction: column;
  color: inherit;
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
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  > a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (min-width: 1024px) {
    min-width: 600px;
  }
`;

export const ButtonSlider = styled.button`
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
