import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-bg-card/30 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-md lg:max-w-lg mx-auto"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
              <motion.img
                src="/profile.jpg"
                alt="Muhammed Syam"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center p-12">
                      <span class="text-7xl sm:text-8xl font-display font-black text-brand-primary opacity-20">
                        MS
                      </span>
                    </div>`;
                }}
              />

              <div className="absolute inset-0 rounded-3xl border-[4px] border-transparent group-hover:border-brand-primary/20 transition-colors duration-500 pointer-events-none"></div>
            </div>

            {/* Floating Card */}
            <div
              className="
                absolute
                -bottom-4
                right-4
                sm:-bottom-6
                sm:-right-6
                glass-card
                px-5
                py-4
                border-brand-primary/20
              "
            >
              <h4 className="text-xl sm:text-2xl font-bold text-brand-primary">
                100%
              </h4>
              <p className="text-xs sm:text-sm text-gray-400">
                Dedication
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About Me
            </h2>

            <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-7 sm:leading-8">
              <p>
                I am a MERN stack developer focused on building clean,
                responsive, and scalable web applications.
              </p>

              <p>
                I enjoy turning ideas into real products and continuously
                improving my full-stack skills through real-world projects.
              </p>

              <p>
                My approach combines technical proficiency with a strong eye for
                user experience, ensuring every application I build is both
                powerful and intuitive.
              </p>
            </div>

            {/* Experience & Education */}
            <div className="mt-10 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6 sm:gap-8">
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-white text-lg">
                  Experience
                </h4>

                <p className="text-sm text-brand-secondary font-semibold">
                  HighPhaus{" "}
                  <span className="text-gray-500 font-normal">
                    (Jan 2026 – Present)
                  </span>
                </p>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/10"></div>

              <div className="text-center sm:text-left">
                <h4 className="font-bold text-white text-lg">
                  Education
                </h4>

                <p className="text-sm text-gray-500">
                  BCA (IGNOU)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;