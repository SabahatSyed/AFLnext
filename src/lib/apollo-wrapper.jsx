"use client";

const {
  ApolloClient,
  ApolloLink,
  HttpLink,
  SuspenseCache,
} = require("@apollo/client");
import { setContext } from "@apollo/client/link/context";

const {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} = require("@apollo/experimental-nextjs-app-support/ssr");

const authLink = setContext((_, { headers }) => {
  // Get the authentication token from your authentication provider
  const token = "bf2632921a9cae14345472d324e48e6c";

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "X-Shopify-Storefront-Access-Token": token ? `${token}` : "",
      "Content-Type": "application/graphql",
    },
  };
});
const GRAPHQL_ENDPOINT = `https://291dfd.myshopify.com/api/2023-10/graphql.json`;

function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink
    ),
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider
      makeClient={makeClient}
      makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider>
  );
}

module.exports = { ApolloWrapper };
