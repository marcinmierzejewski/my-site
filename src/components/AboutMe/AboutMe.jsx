import { AboutWrapper, ButtonProjects } from "./AboutMe.styled";
import { Link } from "react-router-dom";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export const AboutMe = () => {
  return (
    <AboutWrapper>
      <h1>My name is Marcin Mierzejewski</h1>
      <h2>
        I'm beginner Fullstack Web Developer, specialized in Frontend using
        React - JavaScript library
      </h2>
      <p>
        I am a graduate of Front-End Developer course. Looking for my new job. I
        have 1 year experience gained while studying. Open to changes and learn
        innovative technologies. I am a very conscientious and responsible
        person for whom work is very important. Work like Front- End Developer
        will be an opportunity for me to expand my knowledge
      </p>
      <Link to="/projects">
          <ButtonProjects>
            Go to Projects <HiOutlinePresentationChartBar />
          </ButtonProjects>
        </Link>
    </AboutWrapper>
  );
};
