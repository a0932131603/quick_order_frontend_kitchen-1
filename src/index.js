import { HttpLink, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://2621-150-117-240-26.ngrok.io/graphql',
  // uri: 'https://api.eatba.tk/graphql',
  // url: 'https://localhost:80/graphql'
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: `ws://2621-150-117-240-26.ngrok.io/graphql`,
  // uri: 'ws://api.eatbba.tk/graphql',
  options: { reconnect: true },
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore({}),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
