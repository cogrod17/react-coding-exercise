import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
