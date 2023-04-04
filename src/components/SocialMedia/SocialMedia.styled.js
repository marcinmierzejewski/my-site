import styled from "styled-components";

export const SocialMediaBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 260px;
  color: var(--color-light);

  > li {
    > a > svg {
      width: 24px;
      height: 24px;
      transition: all 250ms linear;
      cursor: pointer;
      color: var(--color-light);
      @media screen and (min-width: 480px) {
        width: 40px;
        height: 40px;
      }

      &:hover {
        color: var(--color-hover);
      }
    }
  }
  > li:not(:last-child) {
    margin-right: 15px;
  }
`;