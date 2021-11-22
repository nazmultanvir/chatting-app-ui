import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';
import {NETWORK_INTERFACE} from './config';
import AppNavigator from './route/AppNavigator';

const client = new ApolloClient({
  uri: NETWORK_INTERFACE,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;
