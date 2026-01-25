import heroImage from "../assets/hero-woman.png";
// import person1 from "../assets/person-1.png";
// import person2 from "../assets/person-2.png";
// import person3 from "../assets/person-3.png";
// import person4 from "../assets/person-4.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Right blue diagonal */}
      <div className="absolute right-0 top-0 h-full w-[45%] bg-linear-to-b from-primary to-blue-800 rounded-bl-[120px]" />

      {/* Decorative blob */}
      <div className="absolute right-[28%] top-[35%] w-55 h-55 bg-primary/80 rounded-[60px] rotate-45 blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left text */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-800 block">Hire Vetted Talent or</span>
            <span className="text-(--color-primary) block mt-2">
              Get Matched
            </span>
            <span className="text-gray-800 block">
              with Global Employers
            </span>
          </h1>

          <p className="mt-6 text-text max-w-md">
            Kongila connects global employers with vetted talent from
            Africa, Asia, Latin America, and the Caribbean for full/part-time
            remote and project roles.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <button className="bg-(--color-primary) px-6 py-3 rounded-lg text-white font-medium shadow-md hover:bg-primary/90 transition">
              Hire Top Talent
            </button>

            <button className="bg-black border border-border px-6 py-3 rounded-lg text-white flex items-center gap-2 transition">
              Book a Call
              <span>📞</span>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[320px] md:w-95 lg:w-105 rotate-6 rounded-[48px] overflow-hidden shadow-md">
            <img
              src={heroImage}
              alt="Talent"
              className="w-full h-full object-cover -rotate-6 scale-110"
            />
          </div>
        </div>

         {/* Circle people images */}
       { /* <div className="absolute left-1/2 top-[55%] transform -translate-x-1/2 flex space-x-4 lg:space-x-6">
          <img src={person1} alt="Person 1" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
          <img src={person2} alt="Person 2" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
          <img src={person3} alt="Person 3" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
          <img src={person4} alt="Person 4" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
        </div> */ }
      </div>
    </section>
  );
}
