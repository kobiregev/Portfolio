import React, { useState } from "react";
import { motion } from "framer-motion"
import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
interface NavbarProps {
  setDarkMode: React.Dispatch<any>;
  darkMode: boolean;
  onAboutScroll: () => void;
  onProjectsScroll: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  setDarkMode,
  darkMode,
  onAboutScroll,
  onProjectsScroll,
}) => {
  const handleDarkMode = () =>
    setDarkMode((prevDarkMode: boolean) => !prevDarkMode);

  const darkModeIcon = darkMode ? (
    <FiMoon className="w-6 h-6" />
  ) : (
    <FiSun className="w-6 h-6" />
  );

  return (
    <div className="navbar bg-base-100 w-full sticky top-0 z-10 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FiMenu className="w-6 h-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={onAboutScroll}>
              <a>About Me</a>
            </li>
            <li onClick={onProjectsScroll}>
              <a>Projects</a>
            </li>
            <li>
              <a href="/Kobi-Regev-cv.docx" download target="_blank">
                Download Cv
              </a>
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
