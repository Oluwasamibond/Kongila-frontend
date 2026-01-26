import React from 'react'
import {
  Rocket,
  Store,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

const employers = [
  {
    icon: Rocket,
    title: "Startups & Scale-Ups",
    bg: "bg-slate-900",
    text: "text-white",
    desc:
      "Hire experts quickly to support growth, product development, and execution without slowing down your momentum.",
    list: [
      "Short-term Specialist",
      "Growth Hires",
      "Project Execution",
    ],
  },
  {
    icon: Store,
    title: "SMBs & Mid-Market",
    bg: "bg-blue-700",
    text: "text-white",
    desc:
      "Get matched with pre-vetted professionals within days and reduce the cost & complexity of traditional hiring.",
    list: [
      "Role Outsourcing",
      "Ongoing Support",
      "Flexible Staffing",
    ],
  },
  {
    icon: Building2,
    title: "Enterprise Teams",
    bg: "bg-slate-600",
    text: "text-white",
    desc:
      "Scale teams confidently with vetted professionals, managed engagements, and structured oversight across roles.",
    list: [
      "Large-Scale Hiring",
      "Managed Teams",
      "Cross-Functional Delivery",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Consulting Firms & Agency",
    bg: "bg-blue-800",
    text: "text-white",
    desc:
      "Deliver client projects faster by accessing reliable experts and managed teams when and where you need them.",
    list: [
      "Client Delivery",
      "Specialist Augmentation",
      "Project Teams",
    ],
  },
];

function EmployerSection() {
  return (
      <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-700 font-semibold mb-3">
            Who Kongila Helps
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Teams at Every Stage of Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From early-stage startups to enterprise teams and consulting firms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {employers.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`${item.bg} ${item.text} rounded-3xl p-8 flex flex-col`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={36} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm opacity-90 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* List */}
                <ul className="space-y-3 mb-10">
                  {item.list.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-auto bg-white text-blue-700 font-medium py-3 rounded-xl hover:bg-gray-100 transition">
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default EmployerSection