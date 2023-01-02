import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
import CartList from "./pages/CartList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/add",
        element: <AddProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: <CartList />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
