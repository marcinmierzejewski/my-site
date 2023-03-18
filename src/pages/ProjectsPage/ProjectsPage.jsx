import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import projects from "../../components/ProjectsList/projects.json";
import { BoxSection } from "../../components/Section/Section";

const ProjectsPage = () => {
  return (
    <>
      <BoxSection>
        <ProjectsList projects={projects} />
      </BoxSection>
    </>
  );
};

export default ProjectsPage;
