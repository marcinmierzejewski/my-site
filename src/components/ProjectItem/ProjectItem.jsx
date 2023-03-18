import { ProjectWrapper, ProjectContent, ImageBox, ProjectImage, ContentBox, ButtonBox } from "./ProjectItem.styled";
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
          <p>{about}</p>
          <p>Created using: {usedSkills}</p>
          <ButtonBox>
            <button>
              <a href={repoLink} target="_blank">
                <HiOutlineChevronDoubleRight/> Repo
              </a>
            </button>
            <button>
              <a href={pageLink} target="_blank">
                <HiOutlineChevronDoubleRight /> Pages
              </a>
            </button>
          </ButtonBox>
        </ContentBox>
      </ProjectWrapper>
    </ProjectContent>
  );
};
