import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showSearch } from "../../utils/slices/searchSlice";

const Header = () => {
  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector((store) => store.cart.cartCount);
  const [isMenuClose, setIsMenuClose] = useState(true);

  const handleSearch = () => {
    dispatch(showSearch());
  };

  const handleCloseMenu = () => {
    setIsMenuClose(true);
  };

  const handleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white">
      {isMenuClose ? (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-2  lg:px-8" aria-label="Global">
          <div className="flex md:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <h1 className="h8 w-auto font-bold text-xl hover:font-bold hover:text-2xl">COLLECTION</h1>
            </a>
          </div>
          <div className="flex md:hidden">
            <div className="flex flex-1 justify-end">
              <Link to="/products">
                <svg
                  className=" size-6 font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:size-5 dark:text-white"
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
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              <Link
                to="/cart"
                className="text-sm font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:font-bold hover:text-base dark:text-white"
              >
                CART <span aria-hidden="true">({cartCount})</span>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-50"
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
                className="flex items-center gap-x-1 text-sm font-semibold uppercase leading-6 text-gray-900 hover:font-bold hover:text-base dark:text-white"
                to="/"
              >
                home
              </Link>
            </div>
            <div className="relative">
              <Link
                className="flex items-center gap-x-1 text-sm font-semibold uppercase leading-6 text-gray-900 hover:font-bold hover:text-base dark:text-white"
                to="/products"
              >
                products
              </Link>
            </div>
            <div className="relative">
              <Link
                className="flex items-center gap-x-1 text-sm font-semibold uppercase leading-6 text-gray-900 hover:font-bold hover:text-base dark:text-white"
                to="/about"
              >
                about
              </Link>
            </div>
            <div className="relative">
              <Link
                className="flex items-center gap-x-1 text-sm font-semibold uppercase leading-6 text-gray-900 hover:font-bold hover:text-base dark:text-white"
                to="/contact"
              >
                contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:flex-1 md:justify-end">
            <Link to="/products">
              <svg
                className=" size-6 font-semibold leading-6 text-gray-900 mx-1 mr-3 hover:size-5 dark:text-white"
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
            </Link>
            {dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-3 cursor-pointer"
                onClick={handleDarkMode}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-3 cursor-pointer"
                onClick={handleDarkMode}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <Link
              to="/cart"
              className="text-sm font-semibold leading-6 text-gray-900 mx-1 mr-6 hover:font-bold hover:text-base dark:text-white"
            >
              CART <span aria-hidden="true">({cartCount})</span>
            </Link>
            <button className="text-sm font-semibold leading-6 text-gray-900 hover:font-bold hover:text-base dark:text-white">
              LOGIN <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      ) : (
        <div className="" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 z-10 w-full   bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to="/" onClick={handleCloseMenu} className="-m-1.5 p-1.5">
                  <h1 className="font-bold text-xl hover:font-bold hover:text-2xl">COLLECTION</h1>
                </Link>
                {dark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ml-3 cursor-pointer"
                    onClick={handleDarkMode}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ml-3 cursor-pointer"
                    onClick={handleDarkMode}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                )}
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-white"
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
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base dark:text-white dark:hover:bg-gray-800"
                  >
                    HOME
                  </Link>
                  <Link
                    to="/products"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base dark:text-white dark:hover:bg-gray-800"
                  >
                    PRODUCTS
                  </Link>
                  <Link
                    to="/about"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base dark:text-white dark:hover:bg-gray-800"
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="/contact"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base dark:text-white dark:hover:bg-gray-800"
                  >
                    CONTACT
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/"
                    onClick={handleCloseMenu}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base dark:text-white dark:hover:bg-gray-800"
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
