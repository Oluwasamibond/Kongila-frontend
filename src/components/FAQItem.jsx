import { ChevronDown } from "lucide-react"

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left"
      >
        <span
          className={`text-base md:text-lg font-medium ${
            isOpen ? "text-[#0047BB]" : "text-gray-900"
          }`}
        >
          {question}
        </span>

        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180 text-[#0047BB]" : "text-gray-500"
          }`}
        />
      </button>

      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
          {answer}
        </p>
      )}
    </div>
  )
}

export default FAQItem
