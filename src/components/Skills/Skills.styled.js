import styled from "styled-components";

export const IconsSkills = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;

  > li {
    filter: grayscale(100%);
    transition: all 250ms linear;
    &:hover {
      cursor: pointer;
      filter: grayscale(0);
    }
  }

  > li > img {
    height: 100px;
  }
`;
