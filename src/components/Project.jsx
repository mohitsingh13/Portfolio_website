import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="mb-16 flex flex-col lg:flex-row lg:justify-center lg:items-start gap-8 lg:gap-12 px-4 max-w-5xl mx-auto"
          >
            
            {/* Left Side: Fully Responsive Project Image Container */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
              {project.liveLink ? (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-full block group">
                  <motion.img
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-video rounded-lg border border-neutral-800 group-hover:border-purple-500 shadow-md group-hover:shadow-purple-500/10 transition-all duration-300 object-cover"
                  />
                </a>
              ) : (
                <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-full">
                  <motion.img
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto aspect-video rounded-lg border border-neutral-800 object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right Side: Project Specifications & Detail Text */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-2/3 flex flex-col justify-top"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                <h6 className="font-bold text-2xl text-white tracking-wide">{project.title}</h6>
                
                {/* Action Links Group */}
                <div className="flex items-center gap-3 text-sm font-semibold">
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-purple-400 hover:text-purple-300 underline transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-neutral-400 hover:text-white underline transition-colors"
                    >
                      Source Code ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-4 text-neutral-400 leading-relaxed text-[15px]">{project.description}</p>

              {/* Renders Bulleted Features list if present */}
              {project.features && (
                <ul className="mb-5 list-disc list-inside text-sm text-neutral-300 space-y-2 pl-1">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="marker:text-purple-500">{feat}</li>
                  ))}
                </ul>
              )}

              {/* Dynamic Tech Badges Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-neutral-900 border border-neutral-800/80 px-3 py-1 text-xs font-semibold tracking-wider text-purple-400/90 shadow-inner"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;