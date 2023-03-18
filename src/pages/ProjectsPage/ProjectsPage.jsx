import { ProjectsList } from "../../components/ProjectsList/ProjectsList";
import projects from "../../components/ProjectsList/projects.json";
import { BoxSection } from "../../components/Section/Section";

const ProjectsPage = () => {
  return (
    <>
      <h2>My projects</h2>
      <BoxSection>
        <ProjectsList projects={projects} />
      </BoxSection>
    </>
  );
};

export default ProjectsPage;
