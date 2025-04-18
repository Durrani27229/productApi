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
import Cart from './Component/Cart.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './config/redux/store/store.js';


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
      path: "cart",
      element: <Cart/>
      },
      {
      path: "/product/:id",
      element: <SingleProduct/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
