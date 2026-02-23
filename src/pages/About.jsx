import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CEOImage from "../assets/tabish.jpg";
import Team3 from "../assets/team2.jpg";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
  <section className="w-full bg-[#f8f9fa] py-32 sm:py-36 lg:py-40 px-5 sm:px-8 lg:px-12 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#FFD60A] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#588157] rounded-full blur-3xl opacity-20"></div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm text-[#588157] uppercase tracking-widest font-semibold">
          About BritOps
        </span>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 70 }}
          transition={{ duration: 0.6 }}
          className="h-[3px] mt-3 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#588157] mx-auto"
        />

        <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-[#283618]">
          UK Taxi Outsourcing Experts
        </h2>

        <p className="mt-3 text-[#344e41]/90 text-base sm:text-lg leading-relaxed">
          BritOps Taxi Outsourcing delivers reliable UK-standard dispatch,
          fleet coordination and 24/7 support from Pakistan.
        </p>
      </div>

      {/* CEO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 mb-12 border border-[#e9ecef]"
      >
        {/* Image */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-[#FFD60A]">
          <img
            src={CEOImage}
            alt="Tabish Ali"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#588157]">Tabish Ali</h3>
          <span className="text-sm uppercase tracking-widest text-[#6c757d] font-semibold">
            CEO & Founder
          </span>

          <p className="mt-4 text-[#344e41] leading-relaxed">
            Under the leadership of Tabish Ali, BritOps bridges the gap between
            UK taxi standards and offshore dispatch excellence, helping taxi
            companies streamline operations with professionalism and efficiency.
          </p>

          {/* CTA */}
          <Link to="/contact">
            <button className="mt-6 bg-[#FFD60A] hover:bg-yellow-400 transition px-6 py-3 rounded-full font-semibold text-black shadow-lg hover:scale-105">
              Get Free Consultation
            </button>
          </Link>
        </div>
      </motion.div>

      {/* TEAM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 border border-[#e9ecef]"
      >
        {/* Image */}
        <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={Team3}
            alt="BritOps Team"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-[#588157] mb-2">
            Our Expert Team
          </h3>

          <p className="text-[#344e41] leading-relaxed">
            Our trained dispatchers and support staff manage bookings,
            airport transfers, and fleet coordination with precision.
            We ensure every UK client receives seamless service and
            24/7 operational support.
          </p>

          <Link to="/contact">
            <button className="mt-6 bg-[#588157] hover:bg-[#3a5a40] transition px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105">
              Contact
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}