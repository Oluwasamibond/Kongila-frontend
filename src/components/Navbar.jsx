import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className=" bg-primary rounded-lg flex items-center justify-center font-bold">
          <Link to="/">
            <img
              src={logo}
              alt="Kongila Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-black">
          <li className="border-b-2 border-transparent hover:border-(--color-primary) transition-colors duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-(--color-primary) transition-colors duration-300">
            <Link to="/how-we-work">How We Work</Link>
          </li>
          <li className="relative border-b-2 border-transparent hover:border-(--color-primary) transition-colors duration-300 flex items-center gap-1 group cursor-pointer">
            Services
            <span className="text-xs">▾</span>
            {/* Dropdown */}
            <ul
              className="absolute top-full left-0 mt-2 w-40 bg-(--color-neutral-bg) shadow-md rounded-md opacity-0 invisible 
                 group-hover:opacity-100 group-hover:visible 
                 hover:opacity-100 hover:visible 
                 transition-opacity duration-300 z-50"
            >
              <li className="px-4 py-2 hover:bg-(--color-primary) hover:text-white">
                <Link to="/services/direct-hire">Direct Hire</Link>
              </li>
              <li className="px-4 py-2 hover:bg-(--color-primary) hover:text-white">
                <Link to="/services/outsourcing">Outsourcing</Link>
              </li>
              <li className="px-4 py-2 hover:bg-(--color-primary) hover:text-white">
                <Link to="/services/team-management">Team Management</Link>
              </li>
              <li className="px-4 py-2 hover:bg-(--color-primary) hover:text-white">
                <Link to="/services/project-management">
                  Project Management
                </Link>
              </li>
            </ul>
          </li>

          <li className="border-b-2 border-transparent hover:border-(--color-primary) transition-colors duration-300">
            <Link to="/talent">Talent</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-(--color-primary) transition-colors duration-300">
            <Link to="/employer">Employer</Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-sm">
          <Link className="text-(--color-primary) hidden md:inline">
            Apply as a Talent
          </Link>

          <Link className="bg-(--color-primary) px-4 py-2 rounded-lg text-white shadow-sm hover:bg-primary/90 transition">
            Hire Talent
          </Link>

          <Link className="text-white hidden md:inline">Sign In</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
