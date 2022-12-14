import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InMemoryCache } from '@apollo/client';
import confStore from './components/store/confStore';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Toaster } from 'react-hot-toast';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://inspiring-biscotti-961109.netlify.app/',
});

const store = confStore();
store.subscribe(() =>
  setTimeout(
    () => localStorage.setItem('ecom', JSON.stringify(store.getState())),
    800
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
      <Toaster />
    </ApolloProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
