import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Education } from "../../components/Education/Education";
import { BoxSection } from "../../components/Section/Section";
import { WorkExperience } from "../../components/WorkExperience/WorkExperience";

const ThirdPage = () => {
  return (
    <>
      <BoxSection>
        <AboutMe />
      </BoxSection>
      <BoxSection bgColor="isDark">
        <Education />
      </BoxSection>
      <BoxSection bgColor="isGrey" >
        <WorkExperience />
      </BoxSection>      
    </>
  );
};

export default ThirdPage;
