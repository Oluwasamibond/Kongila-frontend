import React from "react";
import image1 from "../assets/talent-image-1.png";
import image2 from "../assets/talent-image-2.png";

function TalentSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – Images */}
          <div className="relative">
            <img
              src={image1}
              alt="Talent Image 1"
              className="rounded-2xl w-full object-cover"
            />

            {/* Bottom Image */}
            <img
              src={image2}
              alt="Talent Image 1"
              className="rounded-2xl w-3/4 object-cover absolute -bottom-20 right-0 shadow-md hidden md:block"
            />
          </div>

          {/* RIGHT – Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded">
                Expertise
              </span>
              <span className="text-gray-700 font-medium">In our network</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              Finding The Right Fit,
              <br />
              Every Time
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              Access pre-vetted professionals with proven expertise across tech,
              design, and business. Every talent is assessed for skill,
              reliability, and impact.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6">
                <span className="text-blue-700 font-bold text-3xl">01</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Profile The Ideal Candidates
                  </h4>
                  <p className="text-gray-600">
                    Define the exact skills, experience level, and cultural
                    attributes your project requires. We use this to create a
                    precise talent blueprint.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6">
                <span className="text-blue-700 font-bold text-3xl">02</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Match With Vetted Professionals
                  </h4>
                  <p className="text-gray-600">
                    Our screening process, technical assessments, soft-skill
                    checks, and background verification ensures only the most
                    qualified talent is recommended.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <span className="text-blue-700 font-bold text-3xl">03</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Connect & Start Collaborating
                  </h4>
                  <p className="text-gray-600">
                    Review shortlisted candidates, conduct quick interviews if
                    needed, and onboard your chosen talent seamlessly so work
                    can begin right away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for overlapping image */}
        <div className="h-20 md:h-32" />
      </div>
    </section>
  );
}

export default TalentSection;
