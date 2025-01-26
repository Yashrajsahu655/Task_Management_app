import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">TaskEasy</h2>
            <p className="text-sm">Manage your tasks</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mr-16">
            <Link to="/" className="hover:underline">
              Dashboard
            </Link>
            <Link to="/task" className="hover:underline">
              Task
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
