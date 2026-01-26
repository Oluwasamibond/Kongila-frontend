const benefits = [
  {
    id: "1",
    title: "Faster, Stress-Free Hiring",
    desc:
      "Reduce hiring time dramatically and get the right fit without lengthy recruitment processes.",
  },
  {
    id: "2",
    title: "Lower Operational & Hiring Costs",
    desc:
      "No heavy recruitment fees or unnecessary overheads. Hire exactly what you need, when you need it.",
  },
  {
    id: "3",
    title: "Reliable, High-Quality Talent",
    desc:
      "With verified profiles and performance ratings, you gain confidence in every hire.",
  },
  {
    id: "4",
    title: "Workforce Flexibility & Scalability",
    desc:
      "Easily scale teams up or down depending on workload, season, or project needs all through one platform.",
  },
  {
    id: "5",
    title: "Smooth Project & Task Delivery",
    desc:
      "Manage deliverables, deadlines, and communication without juggling multiple tools.",
  },
];

export default function EmployerBenefits() {
  return (
    <section className="relative py-24 bg-linear-to-br from-blue-700 to-blue-900 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Employer Benefits
          </h2>
          <p className="text-blue-100 text-lg">
            What employers personally gain by using Kongila
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-8">
          {benefits.map((item) => (
            <div key={item.id}>
              {/* Pill */}
              <div className="flex items-center gap-6 bg-white rounded-full px-6 py-5 shadow-lg">
                {/* Number */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-bold text-lg shrink-0">
                  {item.id}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-blue-100 mt-4 ml-20 max-w-3xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
