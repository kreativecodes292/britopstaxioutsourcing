import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section id="contact" className="py-14 px-5">
      <div className="max-w-3xl mx-auto bg-[#588157] rounded-xl shadow-lg p-8 text-center">

        {/* Tag */}
        {/* Heading */}
        <h2 className="text-[28px] font-bold text-[#78ffae] mb-3">
          Scale Your UK Taxi Business with Professional Outsourcing
        </h2>

        {/* Description */}
        <p className="text-sm text-[#c9ffc9] mb-6 leading-relaxed">
          Backed by 30+ years of UK taxi road and control room experience, BritOps provides professional taxi dispatch outsourcing, booking management, and 24/7 call handling support for UK taxi companies.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-3 text-[#f1faff] font-semibold">
            <FaPhoneAlt className="text-[#1f9d55]" />
            +44 7521 440329
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/contact">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3a5a40] to-[#588157] text-white text-sm px-7 py-3 rounded-md font-semibold shadow-md transition hover:bg-[#178144] hover:scale-105">
            <FaCalendarCheck />
            Request Your Taxi Consultation
          </button>
        </Link>

      </div>
    </section>
  );
};

export default GetInTouch;
