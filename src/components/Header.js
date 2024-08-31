import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showSearch } from "../utils/slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((store) => store.cart.cartCount);
  const [isMenuClose, setIsMenuClose] = useState(true);

  const handleSearch = () => {
    dispatch(showSearch());
  };

  const handleCloseMenu = () => {
    setIsMenuClose(true);
  };

  return (
    <header className="bg-white">
      {isMenuClose ? (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-2  lg:px-8" aria-label="Global">
          <div className="flex md:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <h1 className="h8 w-auto font-bold text-xl hover:font-bold hover:text-2xl">COLLECTION</h1>
            </a>
          </div>
          <div className="flex md:hidden">
            <div className="flex flex-1 justify-end">
              <svg
                className=" size-6 font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:size-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={handleSearch}
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              <Link
                to="/cart"
                className="text-sm font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:font-bold hover:text-base"
              >
                CART <span aria-hidden="true">({cartCount})</span>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuClose(!setIsMenuClose)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-10 lg:flex lg:gap-x-12">
            <div className="relative">
              <Link
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:font-bold hover:text-base"
                to="/"
              >
                HOME
              </Link>
            </div>

            <div className="relative">
              <Link
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:font-bold hover:text-base"
                to="/products"
              >
                PRODUCTS
              </Link>
            </div>

            <div className="relative">
              <Link
                to="/about"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:font-bold hover:text-base"
                aria-expanded="false"
              >
                ABOUT
              </Link>
            </div>

            <div className="relative">
              <Link
                to="/contact"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:font-bold hover:text-base"
                aria-expanded="false"
              >
                CONTACT
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            <svg
              className=" size-6 font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              onClick={handleSearch}
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <Link
              to="/cart"
              className="text-sm font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:font-bold hover:text-base"
            >
              CART <span aria-hidden="true">({cartCount})</span>
            </Link>
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:font-bold hover:text-base">
              LOGIN <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      ) : (
        <div className="" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 z-10 w-full   bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" onClick={handleCloseMenu} className="-m-1.5 p-1.5">
                <h1 className="h8 w-auto font-bold text-xl hover:font-bold hover:text-2xl">COLLECTION</h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuClose(true)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/products"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base"
                  >
                    PRODUCTS
                  </Link>
                  <Link
                    to="/about"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base"
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/contact"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base"
                  >
                    CONTACT
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base"
                  >
                    LOGIN
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
