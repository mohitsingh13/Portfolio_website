import React from "react";
import about from "../assets/developer.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 px-4">
      {/* Section Title */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-16 text-center text-4xl font-light tracking-wide"
      >
        About <span className="text-neutral-500 font-normal">Me</span>
      </motion.h1>

      {/* Main Grid Wrapper */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
        
        {/* Left Side: Animated Image Container */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px] px-2">
            <img 
              className="w-full h-auto rounded-2xl border border-neutral-800/50 shadow-xl object-cover" 
              src={about} 
              alt="About img" 
            />
          </div>
        </motion.div>

        {/* Right Side: Animated Bio Text Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="max-w-xl text-center lg:text-left px-4 lg:px-0">
            <p className="text-neutral-400 leading-relaxed text-[15px] sm:text-base py-2">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;