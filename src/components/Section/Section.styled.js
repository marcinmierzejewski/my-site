import styled from "styled-components";

const setBackgroundColor = (bgColor) => {
  switch (bgColor) {
    case "isDark":
      return "#000000";

    case "isGrey":
      return "#00000015";

    default:
      return "inherit";
  }
};

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${(props) => setBackgroundColor(props.bgColor)};
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
