import { FaPhoneAlt, FaCalendarCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section id="contact" className=" py-14 px-5">
      <div className="max-w-3xl mx-auto bg-[#588157] rounded-xl shadow-lg p-8 text-center">

        {/* Tag */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a373]  to-[#588157] text-white text-sm px-4 py-2 rounded-full">
            <FaCalendarCheck className="text-sm" />
            Get in Touch
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-[28px] font-bold text-[#78ffae] mb-3">
          Need Care? Contact Us Today!
        </h2>

        {/* Description */}
        <p className="text-sm text-[#c9ffc9] mb-6 leading-relaxed">
          Our friendly team is ready to help you with professional and
          compassionate home care services.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="flex items-center gap-3 text-[#f1faff] font-semibold">
            <FaPhoneAlt className="text-[#1f9d55]" />
            01234 567 890
          </div>
        </div>

        {/* CTA Button FIXED */}
        <Link to="/contact">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3a5a40] to-[#588157]  text-white text-sm px-7 py-3 rounded-md font-semibold shadow-md transition hover:bg-[#178144] hover:scale-105">
            <FaCalendarCheck />
            Request Free Consultation
          </button>
        </Link>

      </div>
    </section>
  );
};

export default GetInTouch;
