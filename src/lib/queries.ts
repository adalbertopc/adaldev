import { gql } from '@apollo/client';

export const getAllProjects = gql`
  query {
    projects {
      id
      title
      description
      preview
      repo
      image {
        url
      }
    }
  }
`;
