import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaUsers, FaHeadset, FaClock, FaMoneyBillWave } from "react-icons/fa";

export default function WhyChoose() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="w-full py-15 px-5 sm:px-8 lg:px-12 py-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm text-[#588157] uppercase tracking-widest font-semibold">
            Why BritOps
          </span>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.6 }}
            className="h-[3px] mt-3 rounded-full bg-gradient-to-r from-[#FFD60A] to-[#588157]"
          />

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-[#283618]">
            30+ Years UK Taxi Experience
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#588157]">
            Trusted Dispatch Outsourcing
          </h2>

          <p className="mt-6 text-[#344e41] text-lg max-w-md leading-relaxed">
            Our team brings decades of driving and dispatch experience from the UK,
            ensuring professional handling of every booking and customer interaction.
          </p>

          <p className="mt-4 text-[#344e41] text-lg max-w-md leading-relaxed">
            Operated from Pakistan, we offer cost-effective, 24/7 dispatch services
            that meet UK standards without compromising quality.
          </p>
        </motion.div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative pl-10">
          {/* Base Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-[#588157]/20"></div>

          {/* Animated Line */}
          <motion.div
            style={{ height }}
            className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-[#FFD60A] to-[#588157]"
          />

          <TimelineStep
            icon={<FaUsers />}
            title="30+ Years UK Taxi Experience"
            text="Decades of real-world driving and dispatch experience, ensuring reliable operations."
          />

          <TimelineStep
            icon={<FaHeadset />}
            title="Dedicated Dispatch Teams"
            text="Fully trained UK-focused dispatch agents managing calls and bookings seamlessly."
          />

          <TimelineStep
            icon={<FaClock />}
            title="24/7 UK Coverage"
            text="Round-the-clock service aligned with UK time zones for prompt customer handling."
          />

          <TimelineStep
            icon={<FaMoneyBillWave />}
            title="Cost-Effective Operations from Pakistan"
            text="Premium UK-standard dispatch services at highly competitive, efficient prices."
          />
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-start gap-6 mb-16"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-[#588157] to-[#344e41] 
                      text-white text-lg shadow-md border border-[#FFD60A]/40 z-10">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#283618]">{title}</h3>
        <p className="text-[#344e41] mt-2 max-w-md">{text}</p>
      </div>
    </motion.div>
  );
}
