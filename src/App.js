import logo from './logo.svg';
import './App.css';

import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Start from './Components/Start/Start';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portoflio from './Components/Portoflio/Portoflio';
import Notfound from './Components/NotFound/Notfound';

let router= createBrowserRouter([

  {path:"",element:<Layout/>,children:[

    {index:true, element:<Start/>},
    {path:"about", element:<About/>},
    {path:"portflio", element:<Portoflio/>},
    {path:"contact", element:<Contact/>},
    {path:"*",element:<Notfound/>}

  ]},
])


export default function App() {


  return <RouterProvider router={router}>
    
  </RouterProvider>
}
