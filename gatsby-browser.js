import React from "react";
import { ApolloProvider } from "react-apollo";
import { GlobalProvider } from "./src/context/globalContext";
import { client } from "./src/context/ApolloContext";

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </GlobalProvider>
);
