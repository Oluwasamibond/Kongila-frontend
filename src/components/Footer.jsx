import React from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  X,
} from "lucide-react"
import logo from "../assets/Footer-logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer className="bg-[#0047BB] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/">
            <img
              src={logo}
              alt="Kongila Logo"
              className="w-30 h-30 object-contain"
            />
          </Link>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Phone Number</p>
                <p className="opacity-90">+123-456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Our Email</p>
                <p className="opacity-90">Hello@kongila.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium">Office Address</p>
                <p className="opacity-90">99 Kongila St..Ng</p>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 border-t border-white/30" />

        {/* LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">

          <div>
            <h4 className="mb-5 font-semibold tracking-wide">COMPANY</h4>
            <ul className="space-y-3 opacity-90">
              <li>About Us</li>
              <li>How We Work</li>
              <li>Employer</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold tracking-wide">SERVICES</h4>
            <ul className="space-y-3 opacity-90">
              <li>Direct Hire</li>
              <li>Outsourcing</li>
              <li>Team Management</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold tracking-wide">RESOURCES</h4>
            <ul className="space-y-3 opacity-90">
              <li>Pricing & Plans</li>
              <li>Hiring Guide</li>
              <li>Help Center</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-semibold tracking-wide">LEGAL</h4>
            <ul className="space-y-3 opacity-90">
              <li>Terms of Services</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Data Protection</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 border-t border-white/30" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Linkedin, Instagram, Facebook, X].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition cursor-pointer"
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-90">
            Copyright © 2026, Kongila. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer