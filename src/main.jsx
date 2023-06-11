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
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import AllToys from './components/AllToys/AllToys.jsx';
import MyToys from './components/MyToys/MyToys.jsx';
import UpdateToy from './components/UpdateToy/UpdateToy.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import AllToyDetails from './components/AllToyDetails/AllToyDetails.jsx';
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
      },
      {
        path:'register',
        element:<Register></Register>

      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:'alltoys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('http://localhost:5000/alltoys')
      },
      {
        path:"mytoys",
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'mytoys/update/:id',
        element:<UpdateToy></UpdateToy>,
        loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path:'/alltoys/toy-details/:id',
        element:<AllToyDetails></AllToyDetails>,
        loader:({params})=>fetch(`http://localhost:5000/toy-details/${params.id}`)
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
