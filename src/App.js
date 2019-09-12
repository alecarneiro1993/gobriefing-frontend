import React, { Suspense } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import LoadingSpinner from 'custom_modules/elements/LoadingSpinner';

import AppRouter from './components/AppRouter';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<LoadingSpinner />}>
        <AppRouter />
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
