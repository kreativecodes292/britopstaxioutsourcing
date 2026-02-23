import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate w-full pt-24 sm:pt-32 lg:pt-36 pb-24 sm:pb-32 px-5 sm:px-8 lg:px-24 overflow-hidden"
    >
      
      {/* Glow Background */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] 
        bg-gradient-to-br from-[#3a5a40]/30 via-[#588157]/20 to-[#7aa281]/10 blur-3xl rounded-full pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* ================= LEFT FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 bg-[#3a5a40]/20 backdrop-blur-3xl border border-[#588157]/30 
          p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >

          <h2 className="text-2xl sm:text-3xl font-bold text-[#fefae0] mb-2 text-center lg:text-left">
            Scale Your Taxi Business with BritOps
          </h2>

          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-5 py-3 rounded-full border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          />

          <input
            type="email"
            placeholder="Business EmaiL"
            className="w-full px-5 py-3 rounded-full border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          />

          <textarea
            placeholder="Current Dispatch System"
            rows={4}
            className="w-full px-5 py-3 rounded-2xl border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          ></textarea>

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-5 py-3 rounded-full border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          />

          <button className="w-full py-3 bg-gradient-to-r from-[#3a5a40] via-[#588157] to-[#7aa281] text-[#fefae0] rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Submit Request
          </button>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left flex flex-col justify-center"
        >
          <p className="uppercase tracking-widest text-xs sm:text-sm text-[#ecffeb] font-semibold">
            Outsource Your Cab Calls
          </p>

          <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-[#eae2b0]">
            UK Taxi Dispatch & Call Handling <br />
            <span className="text-[#ddffdd]">
              Outsourcing Experts
            </span>
          </h1>

          <p className="mt-5 text-[#dad7cd] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
Streamline your taxi operations with our professional 24/7 dispatch and call handling outsourcing services. Backed by over 30 years of hands-on UK taxi industry experience, BritOps helps taxi operators reduce costs, improve response times, and scale efficiently.
          </p>

          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#b1dcb9] via-[#a9f0a8] to-[#7aa281] mt-6 rounded-full mx-auto lg:mx-0"></div>

          <div className="mt-8 sm:mt-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#f2ffdd]">
                Call Us
              </p>
              <h3 className="text-lg sm:text-2xl font-bold mt-1 text-[#eae2b0]">
                <FaPhoneAlt className="inline mr-2 text-[#91cf90]" />
                +44 (7456) 285429
              </h3>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-[#f2ffdb]">
                Email
              </p>
              <h3 className="text-lg sm:text-2xl font-bold mt-1 text-[#eae2b0]">
                <FaEnvelope className="inline mr-2 text-[#91cf90]" />
                contact@cabrides.com
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
