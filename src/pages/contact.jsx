import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs.sendForm(
      "service_hgcjup7",
      "template_vx4ygqo",
      formRef.current,
      "FRgU3OsHAc7gfXGxU"
    ).then(
      () => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      },
      (err) => {
        console.error("EmailJS Error:", err);
        setError(true);
        setLoading(false);
      }
    );
  };

  return (
    <section className="w-full bg-white text-[#283618] py-32 sm:py-36 lg:py-40 relative overflow-hidden">

      {/* Decorative Shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD60A] rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#588157] rounded-full opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
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
            <p>contact@homecare.co.uk</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl shadow-lg p-6 flex flex-col items-center">
            <div className="bg-[#FFD60A] p-4 rounded-full mb-4 text-2xl text-white">
              <MdOutlineMessage />
            </div>
            <h3 className="font-bold text-xl mb-2 text-[#588157]">Live Chat</h3>
            <p>Start a chat with our support team.</p>
          </div>

        </div>

        {/* FORM */}
        <div className="bg-[#f5f5f5] rounded-2xl shadow-2xl p-8 md:p-12">

          <h3 className="text-2xl font-bold mb-6 text-center text-[#588157]">
            Send Us a Message
          </h3>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              name="name"
              required
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A]"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A]"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message / Requirements"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A]"
            ></textarea>

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#FFD60A]"
            />

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              className="w-full bg-[#588157] hover:bg-[#FFD60A] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>

            {success && (
              <p className="text-center text-green-600">
                ✅ Message sent successfully
              </p>
            )}

            {error && (
              <p className="text-center text-red-600">
                ❌ Something went wrong
              </p>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}