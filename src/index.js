import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css';
import App from './App';
import Home from './components/home/home';
import Services from './components/services/services';
import Work from './components/work/work';
import About from './components/about/about';
import Careers from './components/careers/careers';
import Contact from './components/contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: < Home />
      },{
        path: '/services',
        element: < Services />
      },{
        path: '/work',
        element: < Work />
      },{
        path: '/about',
        element: < About />
      },{
        path: '/careers',
        element: < Careers />
      },{
        path: './contact',
        element: < Contact />
      }
    ]
  }
]);


root.render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

