import React from "react";
import { CERTIFICATES } from "../constants";
import { motion } from "framer-motion";

const Certificate = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certificates
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {CERTIFICATES.map((certificate, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 100 }}
              initial={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{certificate.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {certificate.course} -{" "}
                <span className="text-sm text-purple-100">
                  {certificate.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{certificate.description}</p>
             
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificate;