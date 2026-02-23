import { FiArrowUpRight } from "react-icons/fi";
import { FaTaxi } from "react-icons/fa";
import { motion } from "framer-motion";
import home from "../assets/home.mp4";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate w-full min-h-screen pt-10 flex items-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 sm:scale-100"
      >
        <source src={home} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center min-h-screen py-24 sm:py-28 lg:py-0">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#faedcd] to-[#fefae0] text-[#344e41] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md mb-5">
              <FaTaxi /> BritOps Taxi Outsourcing
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold leading-snug">
              Built by UK Taxi Experts.
              <br />
              <span className="text-[#faedcd] drop-shadow-[0_0_12px_rgba(250,237,205,0.6)]">
                Delivered Globally
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-4 text-sm sm:text-base md:text-lg text-[#fefae0]/90 max-w-md mx-auto lg:mx-0">
              Powered by 30+ years of UK road and dispatch experience,
              delivering cost-effective taxi operations from Pakistan.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-auto bg-white text-[#344e41] px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
                >
                  Book Consultation <FiArrowUpRight />
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full sm:w-auto border-2 border-[#faedcd] px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#faedcd] hover:text-[#344e41] transition"
                >
                  Learn More
                </motion.button>
              </Link>

            </div>

            {/* Trust Line */}
            <div className="mt-5 text-xs sm:text-sm text-[#fefae0] leading-relaxed">
              ✔ 30+ years UK taxi experience <br className="sm:hidden"/>
              ✔ 24/7 UK-timezone support <br className="sm:hidden"/>
              ✔ Dedicated agents
            </div>
          </motion.div>

          {/* RIGHT SIDE EMPTY */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
}
