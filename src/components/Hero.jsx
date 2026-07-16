import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-padding pt-24 sm:pt-28 lg:pt-32">

      {/* Background */}
      <div className="absolute -left-24 top-1/4 h-44 w-44 sm:h-64 sm:w-64 rounded-full bg-brand-primary/10 blur-3xl animate-pulse"></div>

      <div className="absolute -right-24 bottom-1/4 h-44 w-44 sm:h-64 sm:w-64 rounded-full bg-brand-secondary/10 blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Subtitle */}
          <h2 className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand-primary">
            Full-Stack MERN Developer
          </h2>

          {/* Name */}
          <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Muhammed Syam
          </h1>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-8 text-gray-400">
            I build real-world web applications using{" "}
            <span className="font-semibold text-white">React</span>,
            <span className="font-semibold text-white"> Node.js</span> and
            <span className="font-semibold text-white"> MongoDB</span>.
          </p>

          {/* Buttons */}
          <div className="mb-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">

            <a
              href="#projects"
              className="btn-primary w-full sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="/Muhammed Syam S Resume.pdf"
              download="Muhammed_Syam_Resume.pdf"
              className="btn-secondary flex w-full sm:w-auto items-center justify-center gap-2"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto rounded-full px-8 py-3 font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center gap-6">

            <p className="w-full max-w-xs border-t border-white/5 pt-6 text-sm text-gray-500">
              MERN Stack Engineer at HighPhaus.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">

              <a
                href="https://github.com/MuhammedSyamS"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-gray-400 transition-all hover:bg-white/5 hover:text-brand-primary"
              >
                <FiGithub size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammed-syam-s"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-gray-400 transition-all hover:bg-white/5 hover:text-brand-primary"
              >
                <FiLinkedin size={24} />
              </a>

              <a
                href="mailto:muhammedsyam.dev@gmail.com"
                aria-label="Email"
                className="rounded-full p-2 text-gray-400 transition-all hover:bg-white/5 hover:text-brand-primary"
              >
                <FiMail size={24} />
              </a>

            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;