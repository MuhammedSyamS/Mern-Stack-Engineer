import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden section-padding pt-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-brand-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Full-Stack MERN Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Muhammed Syam
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            I build real-world web applications using <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Node.js</span> and <span className="text-white font-medium">MongoDB</span>.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-12">
            <a href="#projects" className="btn-primary w-full sm:w-auto">View Projects</a>
            <a href="/Muhammed Syam S Resume.pdf" download="Muhammed_Syam_Resume.pdf" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
               Download Resume
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent text-gray-300 font-semibold rounded-full transition-all hover:text-white hover:bg-white/5 w-full sm:w-auto">
               Contact Me
            </a>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-sm text-gray-500 border-t border-white/5 pt-6 w-full max-w-xs">
              MERN Stack Engineer at HighPhaus.
            </p>
            
            <div className="flex gap-6 text-gray-400">
              <a href="https://github.com/MuhammedSyamS" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-syam-s" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="mailto:muhammedsyam.dev@gmail.com" className="hover:text-brand-primary transition-colors">
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
