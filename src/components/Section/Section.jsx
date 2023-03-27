import { Section, Wrapper } from "./Section.styled";

export const BoxSection = ({ title, children, bgColor }) => {
  return (
    <Section bgColor={bgColor}>      
      <Wrapper>
        <h2>{title}</h2>
        {children}
      </Wrapper>
    </Section>
  );
};
