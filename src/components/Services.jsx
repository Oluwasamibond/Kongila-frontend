import React from 'react'
import {
  Briefcase,
  PhoneCall,
  Database,
  FolderKanban,
  FileText,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    title: "Direct Hire",
    description:
      "Kongila’s direct hire service helps companies recruit vetted professionals for full-time or part-time roles. Instead of reviewing hundreds of applications.",
    icon: Briefcase,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Outsourcing",
    description:
      "Kongila offers talent outsourcing solutions that allow companies to engage professionals without managing daily operations.",
    icon: PhoneCall,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Team Management",
    description:
      "Kongila’s team management tools allow employers to manage individuals and teams through a centralized dashboard. Employers can track performance.",
    icon: Database,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    title: "Project Management",
    description:
      "Kongila provides managed project delivery by assembling dedicated teams and overseeing execution from start to finish.",
    icon: FolderKanban,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Contract Management",
    description:
      "Kongila simplifies contract creation, compliance, and lifecycle management for all talent engagements. From documentation to engagement terms.",
    icon: FileText,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Learning & Mentorship",
    description:
      "Kongila supports continuous professional development through structured mentoring and learning programs.",
    icon: GraduationCap,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];


function Services() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One Platform, Multiple Services
          </h2>
          <p className="text-blue-100 text-lg">
            Kongila provides end-to-end talent and workforce management services
            that help companies hire faster, manage better, and scale with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 border border-gray-200"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${service.iconBg}`}
                    >
                      <Icon
                        className={service.iconColor}
                        size={26}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services