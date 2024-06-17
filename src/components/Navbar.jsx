import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="   mb-15 flex items-center justify-between py-6">
      <div className="  flex flex-shrink-0 items-center text-4xl">
        <h1 className="mx-2 w-100">Portfolio Website</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.instagram.com/mohitsingh_.13/"
          className="instagram "
        >
          {" "}
          <FaInstagram />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/mohit-singh-2514a6216"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/mohitsingh13">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
