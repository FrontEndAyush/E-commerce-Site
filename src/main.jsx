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
import Address from "./checkout_process/Address.jsx";
import AddressForm from "./checkout_process/AddressForm.jsx";
import DeliveryAddressSelection from "./checkout_process/DeliveryAddressSelection.jsx";
import Payment from "./checkout_process/Payment.jsx";
import OrderConfirmed from "./checkout_process/OrderConfirmed.jsx";

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
        path: "*",
        element: <NotFound></NotFound>,
      },

      {
        path: "/address",
        element: <Address />,
        children: [
          {
            path: "/address",
            element: <AddressForm />,
          },
          {
            path: "/address/select_address",
            element: <DeliveryAddressSelection />,
          },
          {
            path: "/address/select_address/payments",
            element: <Payment />,
          },
          {
            path:'/address/select_address/payments/order_confirmation',
           element: <OrderConfirmed ></OrderConfirmed>
          },

          
        ],
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
