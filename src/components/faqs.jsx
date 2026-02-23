import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const faqs = [
  {
    question: "What makes BritOps unique?",
    answer:
      "We are former UK taxi drivers and dispatch professionals with 30+ years of hands-on experience in taxi dispatch outsourcing."
  },
  {
    question: "Do you provide 24/7 UK dispatch support?",
    answer:
      "Yes, we offer 24/7 taxi call handling and booking management aligned with UK time zones."
  },
  {
    question: "Do you understand UK taxi systems?",
    answer:
      "Yes, we have real UK control room and on-road experience handling airports, schools, events, and peak demand."
  },
  {
    question: "Can we scale services easily?",
    answer:
      "Absolutely. Our taxi outsourcing model allows flexible scaling without hiring in-house staff."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-24 overflow-hidden bg-white">

      {/* Glow */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 
        w-[300px] sm:w-[500px] h-[300px] sm:h-[500px]
        bg-gradient-to-br from-[#FFD60A]/30 via-[#588157]/20 to-[#344e41]/10 
        blur-3xl rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#283618] text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-[#344e41] text-sm sm:text-base text-center max-w-xl mx-auto mt-3 sm:mt-4 mb-8 sm:mb-12">
          Answers to the most common questions about our cab outsourcing service.
        </p>

        {/* FAQ List */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left 
                text-[#283618] font-semibold text-sm sm:text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="pr-3">{faq.question}</span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                animate={{ height: openIndex === index ? "auto" : 0 }}
                initial={{ height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <p className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-[#344e41] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}