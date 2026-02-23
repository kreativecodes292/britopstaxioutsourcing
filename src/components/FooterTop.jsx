import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterTop() {
  return (
    <footer className="border-t bg-white border-gray-200 px-6 lg:px-24 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-[#283618]">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-[#588157]">
            CabCall
          </h2>
          <p className="text-[#344e41]/90 leading-relaxed">
            Reliable & professional UK taxi outsourcing solutions.
            Dispatch, fleet coordination & customer support — all managed seamlessly.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FFD60A]/60 hover:bg-[#FFD60A] hover:text-white transition cursor-pointer text-[#588157]">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FFD60A]/60 hover:bg-[#FFD60A] hover:text-white transition cursor-pointer text-[#588157]">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-[#FFD60A]/60 hover:bg-[#FFD60A] hover:text-white transition cursor-pointer text-[#588157]">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#588157]">Contact</h3>

          <div className="space-y-4 text-[#344e41]/90">

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FFD60A]" />
              <span>+44 7521 440329</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFD60A]" />
              <span>support@cabcall.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#FFD60A]" />
              <span>UK Taxi Operations – Managed from Pakistan</span>
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#588157]">Quick Links</h3>

          <ul className="space-y-3 text-[#344e41]/90">

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
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#344e41]/70">

        <p>© {new Date().getFullYear()} CabCall. All rights reserved.</p>

        <p className="mt-3 md:mt-0">
          Developed by 
          <span className="font-semibold text-[#588157] ml-2">
            Webblixo Tech Solutions
          </span>
        </p>

      </div>

    </footer>
  );
}