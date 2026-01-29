import React from "react";
import { Eye, Mail } from "lucide-react";
import bgImage from "../../assets/employer-img.png";
import logo from "../../assets/Footer-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT – IMAGE */}
      <div className="relative hidden lg:block">
        <img
          src={bgImage}
          alt="Welcome back to Kongila"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0047BB]/80" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-12 text-white">
          <h2 className="text-4xl font-bold">WELCOME BACK</h2>
          <div className="w-12 h-1 bg-white my-4" />
          <p className="text-white/90 max-w-sm text-sm leading-relaxed">
            Continue your journey toward global remote opportunities with
            Kongila.
          </p>
        </div>

        {/* Logo */}
        <div className="absolute top-6 left-6 z-10">
          <Link to="/">
            <img src={logo} alt="Kongila logo" className="h-8" />
          </Link>
        </div>
      </div>

      {/* RIGHT – FORM */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900">
            Log in to Kongila
          </h1>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="email"
                  placeholder="eg@example.com"
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
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
                />
                <Eye
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember Me
              </label>
              <span className="text-[#0047BB] font-medium cursor-pointer">
                Forgot Password?
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#0047BB] text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Don’t have an account?{" "}
            <Link
              to="/employer-signup"
              className="text-[#0047BB] font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;