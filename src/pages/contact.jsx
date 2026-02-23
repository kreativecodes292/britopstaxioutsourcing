import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null); // success | error | null

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init("vrh3xWg1AEKLhpnjH");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setPopup(null);

    emailjs
      .sendForm(
        "service_3yvwftu",
        "template_ndrysxy",
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
    <section className="w-full bg-white text-[#283618] py-32 sm:py-36 lg:py-40 relative overflow-hidden">

      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD60A] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#588157] rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[#588157]">
          Get in <span className="text-[#FFD60A]">Touch</span>
        </h2>

        <p className="text-[#344e41]/80 text-center mb-12 text-lg">
          We’d love to hear from you! Reach out for inquiries or a free consultation.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          <div className="bg-[#f5f5f5] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#FFD60A] p-4 rounded-full mb-4 text-2xl text-white">
              <FaPhoneAlt />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#588157]">Call Us</h3>
            <p>+44 7521 440329</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#588157] p-4 rounded-full mb-4 text-2xl text-white">
              <FaEnvelope />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#588157]">Email</h3>
            <p>britopstaxioutsourcing.com</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#FFD60A] p-4 rounded-full mb-4 text-2xl text-white">
              <MdOutlineMessage />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#588157]">Live Chat</h3>
            <p>Start a chat with our support team.</p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-[#f5f5f5] rounded-2xl shadow-2xl p-8 md:p-12">

          <h3 className="text-2xl font-bold mb-6 text-center text-[#588157]">
            Send Us a Message
          </h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">

            <input type="text" name="name" required placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A] outline-none" />

            <input type="email" name="email" required placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A] outline-none" />

            <input type="text" name="phone" required placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A] outline-none" />

            <textarea name="message" rows="4" required placeholder="Your Message / Requirements"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A] outline-none"></textarea>

            <button type="submit" disabled={loading}
              className="w-full bg-[#588157] hover:bg-[#FFD60A] text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-60">
              {loading ? "Sending..." : "Submit Request"}
            </button>

          </form>
        </div>
      </div>

      {/* PREMIUM CENTER MODAL */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-sm w-full text-center animate-popIn relative">

            <button
              onClick={() => setPopup(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>

            {popup === "success" ? (
              <>
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-[#588157] mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We will get back to you shortly.
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-2xl font-bold text-red-500 mb-2">
                  Submission Failed
                </h3>
                <p className="text-gray-600">
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
