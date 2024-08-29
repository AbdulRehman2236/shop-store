import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <h1 className="h8 w-auto font-bold text-xl">COLLECTION</h1>
          </a>
        </div>
        <div className="flex gap-x-12">
          <div className="relative">
            <Link className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" to="/">
              HOME
            </Link>
          </div>

          <div className="relative">
            <Link className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" to="/products">
              PRODUCTS
            </Link>
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              ABOUT
            </button>
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
            >
              CONTACT
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          <Link to="/cart" className="text-sm font-semibold leading-6 text-gray-900 mx-1 mr-6">
            CART <span aria-hidden="true">({cartItems.length})</span>
          </Link>
          <button className="text-sm font-semibold leading-6 text-gray-900">
            LOGIN <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
