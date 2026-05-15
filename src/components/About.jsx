import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
               <motion.img 
                  src="/profile.jpg" 
                  alt="Muhammed Syam" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                     e.target.style.display = 'none';
                     e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center p-12"><span class="text-8xl font-display font-black text-brand-primary opacity-20">MS</span></div>`;
                  }}
               />
               <div className="absolute inset-0 border-[4px] border-transparent group-hover:border-brand-primary/20 transition-colors duration-500 rounded-3xl pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 border-brand-primary/20">
               <h4 className="text-2xl font-bold text-brand-primary">100%</h4>
               <p className="text-sm text-gray-400">Dedication</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a MERN stack developer focused on building clean, responsive and scalable web applications. 
              </p>
              <p>
                I enjoy turning ideas into real products and continuously improving my full-stack skills through real-world projects.
              </p>
              <p>
                My approach combines technical proficiency with a strong eye for user experience, ensuring that every application I build is both powerful and intuitive.
              </p>
            </div>
            
            <div className="mt-8 flex gap-6">
               <div>
                  <h4 className="font-bold text-white">Experience</h4>
                  <p className="text-sm text-brand-secondary font-semibold">HighPhaus <span className="text-gray-500 font-normal">(Jan 2026 - Present)</span></p>
               </div>
               <div className="w-px h-10 bg-white/10"></div>
               <div>
                  <h4 className="font-bold text-white">Education</h4>
                  <p className="text-sm text-gray-500">BCA (IGNOU)</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
