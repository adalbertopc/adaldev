import { InnerLayout } from '../InnerLayout';
import { ProjectCard } from './ProjectCard';
import { IProject } from '../../lib/interfaces/Project';

interface ProjectsProps {
  projects: IProject[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <InnerLayout>
      <section className="my-12 md:my-20">
        <h2 className="mb-6 text-2xl font-bold text-center font-headings md:text-3xl md:text-left">
          Featured Projects
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </InnerLayout>
  );
};
