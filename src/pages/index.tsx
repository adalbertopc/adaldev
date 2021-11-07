import { GetStaticProps } from 'next';
import { apolloClient } from '../apolloClient';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Projects } from '../components/projects/Projects';
import { getAllProjects } from '../lib/queries';
import { IProject } from '../lib/interfaces/Project';

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  return (
    <div>
      <Layout>
        <Hero />
        <Projects projects={projects} />
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await apolloClient.query({
    query: getAllProjects,
  });

  return {
    props: {
      projects: data.projects,
    },
  };
};
