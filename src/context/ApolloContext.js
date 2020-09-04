import ApolloClient from "apollo-boost";
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: `https://ecocart.io/graphql`,
  fetch
});
