import React, { useContext } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { MenuIcon } from "../icons";
import { AuthContext } from "../context/AuthContext";

import { Button } from "@windmill/react-ui";

function NavbarContent() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="flex items-center gap-8 grid grid-cols-1 lg:grid-cols-auto lg:grid-rows-1 lg:grid-flow-col gap-6 text-sm font-bold text-gray-800 md:mr-4 mr-0">
        <HashLink
          className="hover:text-gray-600"
          smooth
          to="/landing/#Ablauf"
        >
          Ablauf
        </HashLink>
        <HashLink
          className="hover:text-gray-600"
          smooth
          to="/landing/#Rezensionen"
        >
          Rezensionen
        </HashLink>
        <HashLink className="hover:text-gray-600" smooth to="/landing/#Preise">
          Preise
        </HashLink>   
        <HashLink className="hover:text-gray-600" smooth to="/landing/#FAQ">
          FAQ
        </HashLink>
      </div>
      {!user && (
        <Link to="/auth/login">
          <Button layout="outline" className="outline">
            Login
          </Button>
        </Link>
      )}
      {!user && (
        <Link to="/auth/create-account">
          <Button>Registrieren</Button>
        </Link>
      )}
      {user && (
        <Link to="/app">
          <Button>Dashboard</Button>
        </Link>
      )}
    </div>
  );
}

function DesktopNavbar() {
  return (
    <aside className="hidden w-full lg:block">
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="py-4 text-gray-500">
            <div className="flex-1 flex items-center justify-between">
              <Link to="/" className="text-xl font-bold text-gray-800">
                <img src={logo} className="w-30 h-14" alt="My logo" />
              </Link>
              <NavbarContent />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function MobileNavbar() {
  const [isNavbarOpen, setNavbarOpen] = React.useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <aside className="flex justify-center">
      <div className="w-full md:w-11/12 lg:hidden">
        <div className="px-4 py-4 text-gray-500">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <Link to="/" className="text-xl font-bold text-gray-800">
                <img src={logo} className="w-30 h-14" alt="My logo" />
              </Link>
              <button
                className="p-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={toggleNavbar}
                aria-label="Menu"
              >
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {isNavbarOpen && <NavbarContent />}
          </div>
        </div>
      </div>
    </aside>
  );
}

export { DesktopNavbar };
export { MobileNavbar };
