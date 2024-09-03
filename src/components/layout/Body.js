import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import Cart from "../cart/Cart";
import Error from "../pages/Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../product/Products";
import HeaderSection from "./Header/HeaderSection";
import BodyContainer from "./BodyContainer";
import PlaceOrder from "../order/PlaceOrder";
import ProductDetails from "../product/ProductDetails";
import OnlineStatus from "../shared/OnlineStatus";
import OrderComplete from "../order/OrderComplete";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <OnlineStatus />
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeaderSection />
            <BodyContainer />
          </>
        ),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/place-order",
        element: <PlaceOrder />,
      },
      {
        path: "/order-complete",
        element: <OrderComplete />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const Body = () => {
  return (
    <div className="h-full min-h-[100vh] dark:bg-gray-800">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
