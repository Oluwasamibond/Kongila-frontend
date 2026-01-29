import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import avatar5 from "../assets/avatar-5.png";
import avatar6 from "../assets/avatar-6.png";
import mainAvatar from "../assets/main.png";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

function Testimonial() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Floating avatars */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="User avatar"
            className={`absolute w-14 h-14 rounded-full object-cover opacity-80
              ${i === 0 && "top-10 left-20"}
              ${i === 1 && "top-24 right-24"}
              ${i === 2 && "top-1/2 -translate-y-1/2 left-10"}
              ${i === 3 && "top-1/2 -translate-y-1/2 right-10"}
              ${i === 4 && "bottom-24 left-24"}
              ${i === 5 && "bottom-20 right-24"}
            `}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <span className="text-blue-600 font-medium text-sm tracking-wide">
          Testimonial
        </span>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Client Feedback
        </h2>

        <div className="mt-10 text-6xl text-gray-300 leading-none">“”</div>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          After months of searching for the right IT solution with no success,
          Kongila completely changed the game. Their team took the time to
          understand our needs, connected us with the perfect talent, and
          handled everything seamlessly. They truly go above and beyond for
          their clients.
        </p>

        {/* Author */}
        <div className="mt-12 flex flex-col items-center">
          <img
            src={mainAvatar}
            alt="Michael R"
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <h4 className="font-semibold text-gray-900 text-lg">Michael R</h4>
          <span className="text-gray-500 text-sm">IT Specialist</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
