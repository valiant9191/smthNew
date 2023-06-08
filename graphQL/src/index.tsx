import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { CharacterID } from 'components/pages/CharacterID';
import {App} from './App';
import './index.css';



const client = new ApolloClient({uri:"https://rickandmortyapi.com/graphql", cache: new InMemoryCache()})

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<>smth wrong</>
  },
  {
    path:`/:id`,
    element: <CharacterID/>,
    errorElement:<>smth wrong</>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
     <RouterProvider router={router} />    
    </ApolloProvider>
  </React.StrictMode>
);


