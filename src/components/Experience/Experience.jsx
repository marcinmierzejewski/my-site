import {
  ExperienceBox,
  Years,
  YearsBox,
  ExperienceYears,
  ExperienceContent,
} from "./Experience.styled";
import {
  HiOutlinePlusSm,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBeaker,
} from "react-icons/hi";

export const Experience = () => {
  return (
    <ExperienceBox>
      <YearsBox>
        <Years>
          <span>2</span>
          <HiOutlinePlusSm />
        </Years>
        <ExperienceYears>
          <li>Years</li>
          <li>Course</li>
          <li>Experience</li>
        </ExperienceYears>
      </YearsBox>
      <ExperienceContent>
        <h3>
          Fullstack Web Developer, specialized in Frontend using React -
          JavaScript library
        </h3>
        <ul>
          <li>
            <p>from 11.2022 to 12.2023</p>
            <p>13 month hardworking</p>
            <p>20+ personal projects</p>
            <p>4 group project</p>
            <div>
              <HiOutlineAcademicCap size={30} />
              <p>GoIT Polska</p>
              <p>FullStack Web Developer</p>
            </div>
          </li>
          <li>
            <p>
              Boost your JavaScript projects with TypeScript: Learn all about
              core types, generics, TypeScript + React or Node & more!
            </p>
            <div>
              <HiOutlineBookOpen size={30} />
              <p>Udemy.com</p>
              <p>Understanding TypeScript</p>
            </div>
          </li>
          <li>
            <p>
              The modern JavaScript course! Master JavaScript with projects,
              challenges and theory. Many courses in one!
            </p>
            <div>
              <HiOutlineBeaker size={30} />
              <p>Udemy.com</p>
              <p>The Complete JavaScript Course</p>
            </div>
          </li>
        </ul>
      </ExperienceContent>
    </ExperienceBox>
  );
};
