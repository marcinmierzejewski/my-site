import { ProjectItem } from "../ProjectItem/ProjectItem";
import { List } from "./ProjectsList.styled";

export const ProjectsList = ({projects}) => {
  return (
    <List>
      {projects.map(({id, title, image, about, usedSkills, repoLink, pageLink}) => (
        <ProjectItem
          key={id}
          title={title}
          image={image}
          about={about}
          usedSkills={usedSkills}
          repoLink={repoLink}
          pageLink={pageLink}        
        />
      ))
      }
    </List>
  )
}