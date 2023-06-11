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
import Blog from './components/Blog/Blog.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
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
        element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-house-server-rianontu.vercel.app/toydetails/${params.id}`)

      },
      {
        path:"addatoy",
        element:<PrivateRoute><AddaToy></AddaToy></PrivateRoute>
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
        loader:()=>fetch('https://toy-house-server-rianontu.vercel.app/alltoys')
      },
      {
        path:"mytoys",
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path:'mytoys/update/:id',
        element:<UpdateToy></UpdateToy>,
        loader:({params})=>fetch(`https://toy-house-server-rianontu.vercel.app/update/${params.id}`)
      },
      {
        path:'/alltoys/toy-details/:id',
        element:<PrivateRoute><AllToyDetails></AllToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-house-server-rianontu.vercel.app/toy-details/${params.id}`)
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  },
  {
    path:'*',
    element:<NotFound></NotFound>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
    <RouterProvider router={router} />
    </AuthenticationProvider>
  </React.StrictMode>,
)
