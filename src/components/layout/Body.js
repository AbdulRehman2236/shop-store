import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Products from "../product/Products";
import Header from "./Header";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import ProductDetails from "../product/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import OnlineStatus from "../shared/OnlineStatus";
import PlaceOrder from "../cart/PlaceOrder";
import OrderComplete from "../cart/OrderComplete";
import Cart from "../cart/Cart";
import BodyContainer from "./BodyContainer";

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
