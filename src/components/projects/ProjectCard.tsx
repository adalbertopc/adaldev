import Image from 'next/image';
import { CodeIcon, EyeIcon } from '@heroicons/react/solid';
import { IProject } from '../../lib/interfaces/Project';
import { Button } from '../Button';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="relative p-4 transition-all transform shadow-md rounded-3xl hover:scale-105">
      <div className="relative aspect-w-16 aspect-h-9 rounded-2xl">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          placeholder="blur"
          blurDataURL={imageUrl}
        />
      </div>
      <div>
        <h2 className="my-3 text-lg font-bold font-headings">{title}</h2>
        <p className={`${!isOpen && 'line-clamp-3'} text-sm`}>{description}</p>
        <button
          className="text-sm font-semibold"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
        <div className="flex gap-2 mt-4">
          <Button>
            <EyeIcon className="w-4 h-4" />
          </Button>
          <Button>
            <CodeIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </article>
  );
};
