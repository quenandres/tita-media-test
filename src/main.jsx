import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(    
    <RouterProvider router={router} />    
);
