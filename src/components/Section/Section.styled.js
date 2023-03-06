import styled from "styled-components";

export const Section = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${(props) =>
      props.isBlack === true ? "#000000" : "inherit"};


`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
