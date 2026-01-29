import { useState } from "react"
import FAQItem from "./FAQItem"

const faqs = [
  {
    question: "How does Kongila verify talent before they appear on the platform?",
    answer:
      "Every talent goes through a multi-step vetting process that includes skill assessment, background checks, portfolio review, and an interview. Only professionals who meet our standards for quality and reliability are approved.",
  },
  {
    question: "Can I hire talent for both short-term and long-term roles?",
    answer:
      "Yes. Kongila supports flexible hiring — from short-term projects to long-term engagements depending on your business needs.",
  },
  {
    question: "How does the escrow payment system work?",
    answer:
      "Funds are securely held in escrow and released only when milestones are approved, ensuring safety and transparency for both parties.",
  },
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

        {/* LEFT – FORM */}
        <div className="bg-[#0047BB] rounded-xl p-8 md:p-10 text-white">
          <h3 className="text-xl font-semibold mb-8">
            Have Anything To Ask?
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 rounded-lg text-white outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 rounded-lg text-white outline-none"
            />

            <input
              type="text"
              placeholder="Your Subject"
              className="w-full px-5 py-4 rounded-lg text-white outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Subject"
              className="w-full px-5 py-4 rounded-lg text-white outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[#0A5CFF] hover:bg-[#0047BB]/90 transition text-white font-semibold py-4 rounded-lg shadow-md"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* RIGHT – FAQ */}
        <div>
          <span className="text-[#0047BB] font-medium tracking-wide">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Our Frequently Asked Question
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Everything you need to know about hiring, managing talent, and using
            the platform—explained clearly.
          </p>

          <div className="mt-10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default FAQ
