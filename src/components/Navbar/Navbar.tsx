import React, { useState } from "react";
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
interface NavbarProps {
  setDarkMode: React.Dispatch<any>;
  darkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ setDarkMode, darkMode }) => {
  const handleDarkMode = () =>
    setDarkMode((prevDarkMode: boolean) => !prevDarkMode);

  const darkModeIcon = darkMode ? <FiMoon /> : <FiSun />;

  return (
    <div className="navbar bg-base-100 w-full sticky top-0 z-10 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FiMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Kobi Regev</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle" onClick={handleDarkMode}>
          {darkModeIcon}
        </button>
      </div>
    </div>
  );
};
