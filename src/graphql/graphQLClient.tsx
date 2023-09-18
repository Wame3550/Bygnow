import { GraphQLClient } from "graphql-request";

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const graphQLClient = new GraphQLClient(String(API_URL), {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default graphQLClient;
