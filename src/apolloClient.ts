import { ApolloClient, InMemoryCache } from '@apollo/client';
export const apolloClient = new ApolloClient({
  uri: `${process.env.STRAPI_URI}/graphql`,
  cache: new InMemoryCache(),
});
