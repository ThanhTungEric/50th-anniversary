import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Box } from "@mui/material";

import icon1 from "../../assets/conference/icon1.png";
import icon2 from "../../assets/conference/icon2.png";
import icon3 from "../../assets/conference/icon3.png";
import imgQR from "../../assets/conference/QR_Dang_ky_nhan_thong_tin.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: icon1,
      title: "A Centre of Excellence",
      description: "Providing trainings to upskill Viet Nam’s green hydrogen workforce.",
    },
    {
      icon: icon2,
      title: "A Demonstration Platform",
      description: "Showcasing real-world green hydrogen technologies.",
    },
    {
      icon: icon3,
      title: "A Business Consortium",
      description: "Connecting key players and enabling joint ventures.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-green-50 to-blue-50 relative overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Header + QR (QR positioned inside the same relative container so it sits top-right) */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
              Green Hydrogen Hub Viet Nam
            </h2>

            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg shadow mb-8">
              Our Vision
            </div>
            <Box>
              The Green Hydrogen Hub Viet Nam aims to unlock Viet Nam’s green hydrogen potential & serves as:
            </Box>
          </motion.div>

          {/* QR block (hidden on small screens) */}
          <div className="hidden md:block absolute right-0 top-0 transform translate-y-4 translate-x-4 text-right">
            <div className="bg-white rounded-lg p-2 shadow-lg inline-block">
              <img
                src={imgQR}
                alt="Scan QR code to follow"
                className="w-24 h-24 object-contain block"
              />
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Scan QR code
              <div className="text-xs text-gray-500">To follow us on LinkedIn</div>
            </div>
          </div>
        </div>

        {/* Features row */}
        <div className="mt-12 grid md:grid-cols-3 gap-12 items-start">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.15 }}
              className="text-center px-6"
            >
              {/* Smaller icon */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 mx-auto mb-3"
              />

              <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
