import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Homebody from './Components/Home/Homebody.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import ContextApi from './Components/ContextApi/ContextApi.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import Products from './Components/Products/Products.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element:<Homebody></Homebody>,
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"addproduct",
        element:<AddProduct></AddProduct>
      },
      {
        path:"product",
        element:<AllProducts></AllProducts>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ContextApi>
  <RouterProvider router={router} />
</ContextApi>
  </React.StrictMode>,
)
