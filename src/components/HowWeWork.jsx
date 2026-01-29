import React from "react";
import { motion } from "framer-motion";
import { UserPlus, ShieldCheck, Handshake, Briefcase } from "lucide-react";

const steps = [
  {
    title: "Apply to join",
    text: "Submit profile for you to be hired",
    icon: UserPlus,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Get verified",
    text: "Your skills, experience and qualifications will be assessed",
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Get matched",
    text: "You are matched for multiple jobs, teams and projects",
    icon: Handshake,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Professional Representation",
    text: "Kongila presents you to global employers",
    icon: Briefcase,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function HowWeWork() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-neutralBg to-primary/30">

         {/* Decorative orbits */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-40 left-1/2 w-900px h-900px border border-white/30 rounded-full -translate-x-1/2" />
        <div className="absolute top-40 left-1/2 w-1100px h-1100px border border-white/20 rounded-full -translate-x-1/2" />
      </div>

      <div  className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section title */}
         <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-20">
          How Kongila Works For Talents
        </h2>

         {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon
                      size={40}
                      className={step.color}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {step.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

          {/* Footer note */}
        <p className="mt-20 text-center text-secondary font-medium">
          Kongila is selective. All talents are vetted
        </p>

      </div>

    </section>
  )
}

export default HowWeWork;
