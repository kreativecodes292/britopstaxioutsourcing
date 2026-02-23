import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaUsers, FaHeadset, FaClock, FaMoneyBillWave } from "react-icons/fa";

// Team images (replace with your own images)
import Team1 from "../assets/team1.jpg";
import Team2 from "../assets/team2.jpg";
import Team3 from "../assets/team3.jpg";


const services = [
  {
    title: "UK Taxi Dispatch Outsourcing",
    description:
      "Our professional dispatch teams based in Pakistan provide 24/7 UK-standard taxi dispatch services. We handle bookings, manage drivers, and ensure timely pick-ups and drop-offs. Our team ensures seamless operations for UK taxi companies, optimizing efficiency and customer satisfaction.",
    icon: <FaUsers />,
    iconBg: "#FFD60A",
    teamImg: Team1,
  },
  {
    title: "Airport Transfer Management",
    description:
      "We manage airport pick-ups and drop-offs efficiently. Our dispatch team monitors flight schedules to guarantee punctual service and customer satisfaction. Ideal for UK taxi services aiming for hassle-free airport transfers.",
    icon: <FaHeadset />,
    iconBg: "#588157",
    teamImg: Team2,
  },
  {
    title: "Fleet & Driver Coordination",
    description:
      "Optimize your fleet operations with our trained professionals. From ride allocation to driver communication, we streamline UK taxi operations cost-effectively while maintaining UK service standards.",
    icon: <FaClock />,
    iconBg: "#FFD60A",
    teamImg: Team3,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We provide dedicated customer support aligned with UK time zones. Our team handles inquiries, complaints, and bookings promptly, ensuring your clients experience professional service 24/7.",
    icon: <FaMoneyBillWave />,
    iconBg: "#588157",
    teamImg: Team2,
  },
];

export default function ServicesSection() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
       className="w-full bg-white text-[#283618] py-32 sm:py-36 lg:py-40 px-5 sm:px-8 lg:px-12 relative overflow-hidden"
    >
            {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-sm text-[#588157] uppercase tracking-widest font-semibold">
          Our Services
        </span>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.7 }}
          className="h-[4px] mt-3 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#588157] mx-auto"
        />
        <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-[#283618]">
          Professional UK Taxi Outsourcing
        </h2>
        <p className="mt-4 text-[#344e41]/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          BritOps Taxi Outsourcing offers innovative UK taxi outsourcing solutions. Our team ensures seamless dispatch, fleet coordination, airport transfers, and 24/7 customer support, delivered from Pakistan with UK standards.
        </p>
      </div>
      {/* Decorative shapes */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FFD60A] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#588157] rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm text-[#588157] uppercase tracking-widest font-semibold">
            Why BOTO
          </span>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.6 }}
            className="h-[3px] mt-3 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#588157]"
          />

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#283618]">
            Expert UK Taxi Dispatch Solutions
          </h2>
          <p className="mt-6 text-[#344e41] text-lg max-w-md leading-relaxed">
            CabCall offers end-to-end UK taxi outsourcing solutions. Our team manages bookings, dispatch, fleet operations, airport transfers, and customer support, ensuring top-notch UK-standard service from Pakistan.
          </p>
          <p className="mt-4 text-[#344e41] text-lg max-w-md leading-relaxed">
            Cost-effective, 24/7, and highly reliable dispatch outsourcing that scales your UK taxi business efficiently while maintaining client satisfaction.
          </p>
        </motion.div>

        {/* RIGHT SIDE TIMELINE / CARDS */}
        <div className="relative pl-10">
          {/* Base Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-[#588157]/20"></div>

          {/* Animated Line */}
          <motion.div
            style={{ height }}
            className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-[#FFD60A] to-[#588157]"
          />

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex flex-col lg:flex-row items-start gap-6 mb-16"
            >
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg border border-[#FFD60A]/40 text-white text-lg z-10"
                style={{ backgroundColor: service.iconBg }}
              >
                {service.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#588157]">
                  {service.title}
                </h3>
                <p className="text-[#344e41] mt-2">{service.description}</p>

                {/* Team Image */}
                <div className="mt-4 w-full h-48 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={service.teamImg}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}