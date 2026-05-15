import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'HighPhaus',
    description: 'HighPhaus is a premier real estate platform offering seamless property exploration, integrated video tours, and intuitive search functionality.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Shijas786/highphaus-website',
    demo: 'https://highphaus.com',
    color: '#e8ff47',
    image: '/highphaus.png'
  },
  {
    title: 'Slook',
    description: 'A comprehensive, enterprise-grade MERN stack e-commerce platform developed for MNC operations. Scalable product management and secure checkouts.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/MuhammedSyamS/E-commerce-2-frontend',
    demo: 'https://slook.onrender.com',
    color: '#06b6d4',
    image: '/slook.png'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A collection of real-world projects that demonstrate my ability to solve complex problems and deliver high-quality results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card flex flex-col group h-full overflow-hidden relative border border-white/5 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] sm:aspect-video rounded-xl mb-6 overflow-hidden relative bg-black">
                 <div 
                    className="absolute inset-0 opacity-10 transition-transform group-hover:scale-110 duration-700"
                    style={{ backgroundColor: project.color }}
                 ></div>
                 <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += `<div class="absolute inset-0 flex items-center justify-center font-display font-black text-4xl text-white/20 uppercase tracking-tighter">${project.title}</div>`;
                    }}
                 />
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-2 pb-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary/20 transition-all hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub size={18} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 text-sm md:text-base mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-semibold px-3 py-1.5 bg-white/5 rounded-full text-gray-300 border border-white/10 group-hover:border-white/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
