import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Product from './Pages/Product.jsx';
import Contact from './Pages/Contact.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      path: "/",
      element: <Home/>,
      },
      {
      path: "about",
      element: <About/>,
      },
      {
      path: "contact",
      element: <Contact/>,
      },
      {
      path: "product",
      element: <Product/>,
      },
      {
      path: "/product/:id",
      element: <SingleProduct/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
