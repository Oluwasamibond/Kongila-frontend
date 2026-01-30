import React, { act } from "react";
import { motion } from "framer-motion";
import {
  Wand2,
  BadgeCheck,
  Layers,
  LayoutDashboard,
  TrendingUp,
} from "lucide-react";
import image1 from "../assets/why-1.png";
import image2 from "../assets/why-2.png";

const features = [
  {
    id: 1,
    title: "Smart talent matching",
    text: "We connect you with professionals who match your role requirements, skills, and engagement needs",
    icon: Wand2,
    active: true,
  },
  {
    id: 2,
    title: "Verified professionals",
    text: "Every professionals on Kongila is vetted for skills, experience, and readiness",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Multiple hiring models",
    text: "Hire individuals, outsourcing roles, or run managed projects teams, all in one platform",
    icon: Layers,
    active: true,
  },
  {
    id: 4,
    title: "Simple management tools",
    text: "Manage hires, projects, contracts, and communication from a single dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 5,
    title: "Scalable solutions",
    text: "Scale from one hire to full teams as your business grows",
    icon: TrendingUp,
    active: true,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function WhyKongila() {
  return (
    <section className="bg-[#F7FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-20">
          Why Choose Kongila
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left features / Images */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-70 sm:w-85 lg:w-380px">
              <img
                src={image1}
                alt="Professional"
                className="w-full h-420px object-cover rounded-[48px]"
              />

              <img
                src={image2}
                alt="Interview"
                className="absolute -bottom-10 left-60 right-50px w-220px h-260px object-cover hidden md:block"
              />
            </div>
          </div>

          {/* Right features list */}
          <div className="space-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={`p-6 rounded-2xl border border-border flex gap-4 items-start
                    ${item.active ? "bg-gray-300" : "bg-white shadow-sm"}
                  `}
                >
                  {/* Icon */}
                  <div className="mt-1">
                    <Icon
                      size={22}
                      className="text-secondary"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                       {item.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyKongila;
