import React from 'react'
import bannerImg from '../assets/banner.jpg'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <section className="relative w-full h-75 md:h-95 lg:h-105 overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bannerImg}
        alt="Kongila Community"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#0047BB]/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
          Join the Kongila Community
        </h2>

        <p className="mt-4 text-[#E2E8F0] text-sm md:text-lg max-w-2xl">
          Diverse Talents. Global Employers. One Platform
        </p>

        <button className="mt-8 bg-white text-[#0047BB] font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all">
          <Link to="/employer-signup">Sign Up</Link>
        </button>
      </div>
    </section>
  )
}

export default Banner