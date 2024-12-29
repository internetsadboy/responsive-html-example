import React, { useState } from "react";

const NavBar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu visibility
  const pages = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <button onClick={() => {
          setCurrentPage("");
          setIsMenuOpen(false);
        }} className="text-white text-xl font-bold">
          MyApp
        </button>

        {/* Hamburger Menu Button */}
        <button
          className="flex flex-col justify-between h-6 w-8 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="block w-full h-1 bg-white"></span>
          <span className="block w-full h-1 bg-white"></span>
          <span className="block w-full h-1 bg-white"></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-600 md:relative md:top-auto md:left-auto md:w-auto md:flex md:items-center`}
        >
          {pages.map((page) => (
            <li key={page} className="border-b md:border-0 border-blue-700">
              <button
                className={`block w-full text-left py-2 px-4 text-white hover:bg-blue-700 md:hover:bg-transparent text-white no-undelrine hover:font-semibold ${
                  currentPage === page ? "" : ""
                }`}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false); // Close menu after clicking
                }}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
