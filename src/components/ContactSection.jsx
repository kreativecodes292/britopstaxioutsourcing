import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    emailjs.init("vrh3xWg1AEKLhpnjH"); // ✅ Your Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setPopup(null);

    emailjs
      .sendForm(
        "service_3yvwftu",     // ✅ Service ID
        "template_ndrysxy",    // ✅ Template ID
        formRef.current
      )
      .then(() => {
        setLoading(false);
        formRef.current.reset();
        setPopup("success");
        setTimeout(() => setPopup(null), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setLoading(false);
        setPopup("error");
        setTimeout(() => setPopup(null), 4000);
      });
  };

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
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 bg-[#3a5a40]/20 backdrop-blur-3xl border border-[#588157]/30 
          p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
        >

          <h2 className="text-2xl sm:text-3xl font-bold text-[#fefae0] mb-2 text-center lg:text-left">
            Book Your Outsourced Ride
          </h2>

          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full px-5 py-3 rounded-full border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full px-5 py-3 rounded-full border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          />

          <textarea
            name="message"
            rows={4}
            required
            placeholder="Your Message / Requirements"
            className="w-full px-5 py-3 rounded-2xl border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          ></textarea>

          <input
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full px-5 py-3 rounded-full border border-[#588157] bg-[#3a5a40]/20 text-[#fefae0] placeholder-[#dad7cd] focus:ring-2 focus:ring-[#588157]"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#3a5a40] via-[#588157] to-[#7aa281] text-[#fefae0] rounded-full font-semibold shadow-lg hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>

        </motion.form>

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
            Professional UK <br />
            <span className="text-[#ddffdd]">
              Cab Call Outsourcing Services
            </span>
          </h1>

          <p className="mt-5 text-[#dad7cd] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
            Streamline your taxi dispatch operations with our UK cab call outsourcing solutions.
            Our expert team manages booking calls 24/7 ensuring accuracy and cost-efficiency.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#eae2b0]">
                <FaPhoneAlt className="inline mr-2 text-[#91cf90]" />
                +44 7521 440329
              </h3>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#eae2b0]">
                <FaEnvelope className="inline mr-2 text-[#91cf90]" />
                britopstaxioutsourcing.com
              </h3>
            </div>
          </div>
        </motion.div>

      </div>

      {/* PREMIUM CENTER MODAL */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-[#fefae0] rounded-3xl shadow-2xl p-10 max-w-sm w-full text-center animate-popIn relative">

            <button
              onClick={() => setPopup(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>

            {popup === "success" ? (
              <>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-[#3a5a40] mb-2">
                  Booking Request Sent!
                </h3>
                <p className="text-gray-700">
                  Thank you. Our team will contact you shortly.
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-2xl font-bold text-red-500 mb-2">
                  Submission Failed
                </h3>
                <p className="text-gray-700">
                  Something went wrong. Please try again.
                </p>
              </>
            )}

          </div>
        </div>
      )}

      <style>
        {`
          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-popIn {
            animation: popIn 0.3s ease-out;
          }
        `}
      </style>

    </section>
  );
}
