import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              TaskEasy
            </Link>
          </div>

          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded-md">
              Dashboard
            </Link>
            <Link to="/task" className="hover:bg-blue-500 px-3 py-2 rounded-md">
              Task
            </Link>
            
          </div>

          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&times;</span> // Close icon
              ) : (
                <span className="text-2xl">&equiv;</span> // Hamburger icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-blue-500"
              onClick={toggleMenu}
            >
              DashBoard
            </Link>
            <Link
              to="/task"
              className="block px-3 py-2 rounded-md hover:bg-blue-500"
              onClick={toggleMenu}
            >
              Task
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
