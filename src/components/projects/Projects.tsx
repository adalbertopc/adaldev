import { ProjectCard } from './ProjectCard';
import { IProject } from '../../lib/interfaces/Project';

interface ProjectsProps {
  projects: IProject[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="my-12 md:my-20">
      <h2 className="font-headings font-bold text-center text-2xl md:text-3xl md:text-left mb-6">
        Featured Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      </div>
    </section>
  );
};
