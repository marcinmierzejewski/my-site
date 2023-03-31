import { ProjectWrapper, ProjectContent, ImageBox, AboutPar, ProjectImage, ContentBox, ButtonBox } from "./ProjectItem.styled";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";


export const ProjectItem = ({ title, image, about, usedSkills, repoLink, pageLink }) => {
  return (
    <ProjectContent>
      <ProjectWrapper>
        <ImageBox>
          <ProjectImage src={`${image}`} alt="image" />
        </ImageBox>
        <ContentBox>
          <h3>{title}</h3>
          <AboutPar>{about}</AboutPar>
          <p>Created using: {usedSkills}</p>
          <ButtonBox>
            <button>
              <a href={repoLink} target="_blank">
                <HiOutlineChevronDoubleRight/> Source Code
              </a>
            </button>
            <button>
              <a href={pageLink} target="_blank">
                <HiOutlineChevronDoubleRight /> Live Page
              </a>
            </button>
          </ButtonBox>
        </ContentBox>
      </ProjectWrapper>
    </ProjectContent>
  );
};
