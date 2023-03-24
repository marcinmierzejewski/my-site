import { BoxSection } from "../../components/Section/Section";
import { Hero } from "../../components/Hero/Hero";
import { Skills } from "../../components/Skills/Skills";
import { Experience } from "../../components/Experience/Experience";
import { AboutProjects } from "../../components/AboutProjects/AboutProjects";

const HomePage = () => {
  return (
    <>
      <Hero />
      <BoxSection isBlack={true}>
        <Skills />
      </BoxSection>
      
      <BoxSection>
        <Experience />
      </BoxSection>
      <BoxSection>
        <AboutProjects />
      </BoxSection>
    </>
  );
};

export default HomePage;
