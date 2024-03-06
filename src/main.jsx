import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./compoents/Home/Home.jsx";
import ViewProduct from "./compoents/ViewProduct.jsx";
import Cart from "./compoents/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import Shop from "./compoents/Shop.jsx";
import MensClothing from "./compoents/MensClothing.jsx";
import WomenClothings from "./compoents/WomensClothings.jsx";
import Jewelery from "./compoents/Jewelery.jsx";
import NotFound from "./compoents/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <ViewProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/mensclothings",
        element: <MensClothing />,
      },
      {
        path: "/womenclothings",
        element: <WomenClothings />,
      },
      {
        path: "/jewelery",
        element: <Jewelery />,
      },
      {
        path : "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
