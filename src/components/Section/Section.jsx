import { Section, Wrapper } from "./Section.styled";

export const BoxSection = ({ title, children, isBlack=false}) => {
  return (
    <Section isBlack={isBlack}>      
      <Wrapper>
        <h2>{title}</h2>
        {children}
      </Wrapper>
    </Section>
  );
};
