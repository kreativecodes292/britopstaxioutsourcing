import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import boto from "../assets/new.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-2">

      <motion.div
        layout
        transition={{ duration: 0.4 }}
        className="w-[100%] sm:w-[90%] max-w-6xl h-[90px] 
        rounded-[40px] px-6 shadow-2xl text-white 
        flex items-center justify-between
        bg-gradient-to-r from-[#3a5a40] via-[#588157] to-[#a3b18a] 
        border border-white/20"
      >

        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center h-full">
          <img
            src={boto}
            alt="BritOps Taxi Outsourcing"
            className="h-[150px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-[#FFD60A] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#FFD60A] transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#FFD60A] transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#FFD60A] transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-yellow-200 px-5 py-2 rounded-full flex items-center gap-2 font-semibold text-black hover:scale-105 transition shadow-lg">
              Get Consultation
              <FiArrowUpRight />
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-[100px] w-[90%] max-w-6xl 
            bg-gradient-to-r from-[#3a5a40] via-[#588157] to-[#a3b18a] 
            rounded-[30px] shadow-xl p-6 flex flex-col gap-6 text-lg font-medium md:hidden"
          >
            <Link to="/" className="hover:text-[#FFD60A] transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#FFD60A] transition">
              About
            </Link>
            <Link to="/services" className="hover:text-[#FFD60A] transition">
              Services
            </Link>
            <Link to="/contact" className="hover:text-[#FFD60A] transition">
              Contact
            </Link>

            <Link to="/contact">
              <button className="w-full bg-yellow-200 py-2 rounded-full text-lg font-semibold flex justify-center items-center gap-2 shadow-lg hover:scale-105 transition text-black">
                Get Consultation
                <FiArrowUpRight />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}