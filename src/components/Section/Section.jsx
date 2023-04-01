import { Section, Wrapper } from "./Section.styled";

export const BoxSection = ({ title, children, bgColor, linearColor }) => {
  return (
    <Section bgColor={bgColor} linearColor={linearColor}>      
      <Wrapper>
        <h2>{title}</h2>
        {children}
      </Wrapper>
    </Section>
  );
};
