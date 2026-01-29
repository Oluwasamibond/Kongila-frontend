import React from "react";
import { ArrowLeft, Eye, Mail, MapPin } from "lucide-react";
import bgImage from "../../assets/talent-img.png";
import logo from "../../assets/Footer-logo.png";
import { Link, useNavigate } from "react-router-dom";

function TalentSignUp() {
  const navigate = useNavigate();

   const handleSubmit = (e) => {
    e.preventDefault()

    navigate("/talent-signup2")
  }


  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT – FORM */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-[#0047BB]"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900">
            Apply to join Kongila
          </h1>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed">
            We connect talent to global opportunities while providing
            mentorship, community support, and continuous learning to accelerate
            career growth.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <div className="relative">
                <MapPin
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Your location"
                  className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
                />
                <Eye
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            {/* CHECKBOXES */}
            <div className="space-y-3 text-sm text-gray-600">
              <label className="flex gap-3 items-start">
                <input type="checkbox" className="mt-1" />
                <span>
                  I agree to Kongila's{" "}
                  <span className="text-[#0047BB] font-medium cursor-pointer">
                    Terms & Conditions
                  </span>
                </span>
              </label>

              <label className="flex gap-3 items-start">
                <input type="checkbox" className="mt-1" />
                <span>
                  I understand that Kongila will process my information in
                  accordance with their{" "}
                  <span className="text-[#0047BB] font-medium cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0047BB] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Are you looking to hire talent?{" "}
            <span className="text-[#0047BB] font-medium cursor-pointer">
              <Link to="/employer-signup">Create an employer account</Link>
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT – IMAGE */}
      <div className="relative hidden lg:block">
        <img
          src={bgImage}
          alt="Join Kongila"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0047BB]/80" />

        <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
          <h2 className="text-3xl font-bold">Start Your Journey Here</h2>
          <p className="mt-3 text-white/90 max-w-md text-sm">
            Borderless Opportunities: Kongila links skilled African and Asian
            talent to flexible, high-impact roles across the world.
          </p>
        </div>

        {/* Top left – Logo */}
        <div className="absolute top-6 left-6 z-10">
          <Link to="/">
            <img
              src={logo}
              alt="Kongila logo"
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Top right */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-3 text-sm text-white">
          <span>Already have an account?</span>
          <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0047BB] transition">
            <Link to="/login">Sign In</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TalentSignUp;
