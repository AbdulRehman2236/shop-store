import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import Products from "./Products";
import Header from "./Header";
import HeaderSection from "./HeaderSection";
import Footer from "./Footer";
import ProductDetails from "./ProductDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
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
    ],
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
