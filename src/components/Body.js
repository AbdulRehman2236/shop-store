import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import Products from "./Products";
import Header from "./Header";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import OnlineStatus from "./OnlineStatus";
import PlaceOrder from "./PlaceOrder";

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
    <div className="h-full min-h-[100vh] dark:bg-gray-900">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
