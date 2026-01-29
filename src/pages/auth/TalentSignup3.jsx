import React from "react";
import { ArrowLeft, UploadCloud } from "lucide-react";
import bgImage from "../../assets/talent-img3.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/Footer-logo.png";

function TalentSignUp3() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT – FORM */}
      <div className="flex items-center justify-center px-6 py-10 bg-white">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="text-2xl font-bold text-gray-900">
            Upload Your Resume
          </h1>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">
            This will form the basis of your Kongila profile, which can be
            updated any time.
          </p>

          {/* UPLOAD BOX */}
          <div className="mt-8">
            <label
              htmlFor="resumeUpload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md py-10 cursor-pointer hover:border-[#0047BB] transition"
            >
              <UploadCloud size={48} className="text-gray-400" />
              <span className="mt-4 font-medium text-gray-700">
                Upload your resume
              </span>
              <span className="text-sm text-gray-500 mt-1">
                Drop your file here (PDF) or Browse
              </span>
              <span className="text-xs text-gray-400 mt-1">
                Max file size: 2MB (PDF)
              </span>
              <input
                id="resumeUpload"
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={() => {}}
              />
            </label>
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
          <h2 className="text-3xl font-bold">Showcase Your Expertise</h2>
          <p className="mt-3 text-white/90 max-w-md">
            Highlight your skills, experience, and strengths so Kongila can
            match you with roles that fit your abilities and career goals.
          </p>
        </div>

        {/* Top bar */}
        <div className="absolute top-6 right-6 z-10 flex items-center gap-4 text-sm text-white">
          <span>Already have an account?</span>
          <button className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0047BB] transition">
           <Link to="/login"> Sign In</Link>
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

export default TalentSignUp3;
