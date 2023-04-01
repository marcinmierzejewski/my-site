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
      <BoxSection>
        <WorkExperience />
      </BoxSection>
      <BoxSection>
        <Education />
      </BoxSection>
    </>
  );
};

export default ThirdPage;
