import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import bgImage from "../../assets/employer-img3.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Footer-logo.png";

function EmployerSignup3() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  // Handle input changes
  const handleChange = (e, index) => {
    const value = e.target.value.slice(0, 1); // Only 1 char per box
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Focus next input automatically
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput.focus();
    }
  };

  const handleValidate = () => {
    const verificationCode = code.join("");
    alert("Entered code: " + verificationCode);
    // Here you can add API call to validate code
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
            Please Check Your Email
          </h1>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            Please check your email <strong>employer@kongila.com</strong> for a
            validation code and enter it below to complete your account
            creation.
          </p>

          {/* Verification Code Inputs */}
          <div className="mt-8 flex justify-between gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                maxLength={1}
                className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#0047BB]"
              />
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center justify-between pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-md hover:bg-gray-800 transition"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <button
              type="button"
              className="border border-[#0047BB] text-[#0047BB] px-6 py-2.5 rounded-md font-medium hover:bg-[#0047BB] hover:text-white transition"
            >
              Next
            </button>
          </div>
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
          <h2 className="text-3xl font-bold">Stay Secure, Stay Connected</h2>
          <p className="mt-3 text-white/90 max-w-md">
            You’re just a moment away from managing talent, contracts, and
            projects with confidence.
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

export default EmployerSignup3;
