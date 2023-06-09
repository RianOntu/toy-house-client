import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/Home/Home.jsx';
import SingleToyDetails from './components/SingleToyDetails/SingleToyDetails.jsx';
import AddaToy from './components/AddaToy/AddaToy.jsx';
import AuthenticationProvider from './components/Providers/AuthenticationProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/toydetails/:id",
        element:<SingleToyDetails></SingleToyDetails>,
        loader:({params})=>fetch(`http://localhost:5000/toydetails/${params.id}`)

      },
      {
        path:"addatoy",
        element:<AddaToy></AddaToy>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
    <RouterProvider router={router} />
    </AuthenticationProvider>
  </React.StrictMode>,
)
