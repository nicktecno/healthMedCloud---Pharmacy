import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_REACT_APP_APOLLO_URL,
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default client;
