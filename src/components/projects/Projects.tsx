import { ProjectCard } from './ProjectCard';
import { IProject } from '../../lib/interfaces/Project';

interface ProjectsProps {
  projects: IProject[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map(({ id, title, description, image, repo, preview }) => (
        <ProjectCard
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          repo={repo}
          preview={preview}
        />
      ))}
    </section>
  );
};
