import React from "react";
import { ArrowLeft } from "lucide-react";
import bgImage from "../../assets/employer-img2.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/Footer-logo.png";

function EmployerSignup2() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/employer-signup3");
  };
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT – FORM */}
      <div className="flex items-center justify-center px-6 py-10 bg-white">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-[#0047BB]"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-900">
            Company information
          </h1>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            We are almost there! Please add some information about your company
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Website
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0047BB] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative hidden lg:block">
        <img
          src={bgImage}
          alt="Talent Competence"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0047BB]/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
          <h2 className="text-3xl font-bold">Showcase Your Expertise</h2>
          <p className="mt-3 text-white/90 max-w-md">
            Share your company information to help us verify your account and
            recommend talent tailored to your needs.
          </p>
        </div>

        {/* Top bar */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-4 text-sm text-white">
          <span>Already have an account?</span>
          <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0047BB] transition">
            <Link to="/login">Sign In</Link>
          </button>
        </div>

        {/* Logo */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2 text-white font-semibold">
          <Link to="/">
            <img
              src={logo}
              alt="Kongila logo"
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployerSignup2;
