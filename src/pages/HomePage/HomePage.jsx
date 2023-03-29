import { BoxSection } from "../../components/Section/Section";
import { Hero } from "../../components/Hero/Hero";
import { Skills } from "../../components/Skills/Skills";
import { Experience } from "../../components/Experience/Experience";
import { AboutProjects } from "../../components/AboutProjects/AboutProjects";
import { Connect } from "../../components/Connect/Connect";

const HomePage = () => {
  return (
    <>
      <Hero />

      <BoxSection bgColor="isDark">
        <Skills />
      </BoxSection>

      <BoxSection>
        <Experience />
      </BoxSection>

      <BoxSection bgColor="isGrey">
        <AboutProjects />
      </BoxSection>

      <BoxSection bgColor="isDark">
        <Connect />
      </BoxSection>
    </>
  );
};

export default HomePage;
