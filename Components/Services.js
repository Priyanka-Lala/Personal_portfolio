import { assets, servicesData } from "@/Assets/Assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 font-Ovo text-lg"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center text-5xl font-Ovo"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mt-8 mb-12 font-Ovo"
      >
        I am a full  stack developer situated in Pune. I focus on addressing complex
        difficulties through creative solutions, employing my strong analytical
        skills and a continuous learning mindset.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {servicesData.map(
          ({ icon, description, title, Link, dark_icon }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12
         hover:shadow-black cursor-pointer hover:bg-LightHover hover:-translate-y-1 duration-500 dark:hover:bg-Darkhover dark:hover:shadow-white"
            >
              <Image
                src={isDarkMode ? dark_icon : icon}
                alt=""
                className="w-15"
              />
              <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                {description}
              </p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
