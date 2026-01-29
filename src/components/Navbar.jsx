import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Kongila Logo"
            className="w-20 h-20 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-black">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/how-we-work">How We Work</Link></li>

          {/* Services Dropdown */}
          <li className="relative group cursor-pointer flex items-center gap-1">
            Services <span className="text-xs">▾</span>
            <ul className="absolute top-full left-0 mt-2 w-44 bg-(--color-neutral-bg) shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
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
                <Link to="/services/project-management">Project Management</Link>
              </li>
            </ul>
          </li>

          <li><Link to="/talent">Talent</Link></li>
          <li><Link to="/employer">Employer</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link to="/talent-signup" className="text-(--color-primary)">
            Apply as a Talent
          </Link>
          <Link
            to="/employer-signup"
            className="bg-(--color-primary) px-4 py-2 rounded-lg text-white"
          >
            Hire Talent
          </Link>
          <Link to="/login">Sign In</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <span className="font-bold">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col px-6 py-6 space-y-5 text-sm">
          <li><Link onClick={() => setMenuOpen(false)} to="/about">About</Link></li>
          <li><Link onClick={() => setMenuOpen(false)} to="/how-we-work">How We Work</Link></li>

          {/* Mobile Services */}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full"
            >
              Services
              <ChevronDown
                size={18}
                className={`${servicesOpen ? "rotate-180" : ""} transition`}
              />
            </button>

            {servicesOpen && (
              <ul className="mt-3 ml-4 space-y-3 text-gray-600">
                <li><Link to="/services/direct-hire">Direct Hire</Link></li>
                <li><Link to="/services/outsourcing">Outsourcing</Link></li>
                <li><Link to="/services/team-management">Team Management</Link></li>
                <li><Link to="/services/project-management">Project Management</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/talent">Talent</Link></li>
          <li><Link to="/employer">Employer</Link></li>

          <hr />

          <li>
            <Link
              to="/talent-signup"
              className="text-(--color-primary)"
            >
              Apply as a Talent
            </Link>
          </li>
          <li>
            <Link
              to="/employer-signup"
              className="bg-(--color-primary) text-white px-4 py-2 rounded-lg inline-block"
            >
              Hire Talent
            </Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;