import { Link } from "react-router-dom";

export const NavLink = ({ name }) => {
  return (
    <div className="relative">
      <Link
        className="flex items-center gap-x-1 text-sm font-semibold uppercase leading-6 text-gray-900 hover:font-bold hover:text-base dark:text-white"
        to={name === "home" ? "/" : "/" + name}
      >
        {name}
      </Link>
    </div>
  );
};

export const MobileNavLink = ({ name, closeMenu }) => {
  return (
    <Link
      to={name === "home" || name === "login" ? "/" : "/" + name}
      onClick={closeMenu}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold uppercase leading-7 text-gray-900 hover:bg-gray-50 hover:font-bold hover:text-base dark:text-white dark:hover:bg-gray-800"
    >
      {name}
    </Link>
  );
};
