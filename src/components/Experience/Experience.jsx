import {
  ExperienceBox,
  Years,
  YearsBox,
  ExperienceYears,
  ExperienceContent,
} from "./Experience.styled";
import { HiOutlinePlusSm } from "react-icons/hi";

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
            Go IT
            <p>overlay</p>
          </li>
          <li>
            TypeScript
            <p>overlay</p>
          </li>
          <li>
            JavaScript
            <p>overlay</p>
          </li>
        </ul>
      </ExperienceContent>
    </ExperienceBox>
  );
};
