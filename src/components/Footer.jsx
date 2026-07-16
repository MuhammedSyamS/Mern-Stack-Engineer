import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-bg-dark py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">

          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-display font-bold tracking-wide">
              Muhammed Syam
              <span className="text-brand-primary">.</span>
            </h2>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm sm:text-base text-gray-500 leading-6">
            © {year} Muhammed Syam. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://github.com/MuhammedSyamS"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full text-gray-400 hover:text-brand-primary hover:bg-white/5 transition-all duration-300"
            >
              <FiGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammed-syam-s"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full text-gray-400 hover:text-brand-primary hover:bg-white/5 transition-all duration-300"
            >
              <FiLinkedin size={22} />
            </a>

            <a
              href="mailto:muhammedsyam.dev@gmail.com"
              aria-label="Email"
              className="p-2 rounded-full text-gray-400 hover:text-brand-primary hover:bg-white/5 transition-all duration-300"
            >
              <FiMail size={22} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;