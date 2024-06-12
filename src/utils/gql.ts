import { GraphQLClient } from "graphql-request";

const GRAPHQL_URL = "http://localhost:8080/graphql";

export const client = new GraphQLClient(`${GRAPHQL_URL}`, {
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export function setAuthToken(token: string | null | undefined) {
  client.setHeader("authorization", `Bearer ${token}`);
}

export default client;
