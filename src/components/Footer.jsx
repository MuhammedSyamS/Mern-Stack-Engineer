import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold font-display">
          Muhammed<span className="text-brand-primary">.</span>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {year} Muhammed Syam. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-400">
          <a href="https://github.com/MuhammedSyamS" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-syam-s" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:muhammedsyam.dev@gmail.com" className="hover:text-brand-primary transition-colors">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
