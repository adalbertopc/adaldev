import Image from 'next/image';
import { IProject } from '../../lib/interfaces/Project';

export const ProjectCard = ({
  title,
  description,
  image,
  repo,
  preview,
}: IProject) => {
  const imageUrl = `${
    image[0].url.startsWith('/') ? process.env.STRAPI_URI : ''
  }${image[0].url}`;
  return (
    <article>
      <div className="relative aspect-w-16 aspect-h-9">
        <Image src={imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};
