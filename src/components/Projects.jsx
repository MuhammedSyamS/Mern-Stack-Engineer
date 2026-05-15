import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Hospital Portfolio Website',
    description: 'Designed and developed a responsive hospital portfolio website for a real Ayurvedic clinic to showcase services and contact information.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/MuhammedSyamS',
    demo: '#',
    color: '#7c3aed'
  },
  {
    title: 'Employee Management System',
    description: 'Full CRUD web application to manage employees using JSON Server and modern frontend UI.',
    stack: ['React', 'JSON Server', 'Bootstrap'],
    github: 'https://github.com/MuhammedSyamS',
    demo: '#',
    color: '#06b6d4'
  },
  {
    title: 'Blog Application',
    description: 'Full-stack blogging platform with authentication and REST API integration.',
    stack: ['MERN Stack', 'Redux', 'JWT'],
    github: 'https://github.com/MuhammedSyamS',
    demo: '#',
    color: '#ec4899'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col group h-full"
            >
              <div className="aspect-video bg-gray-900 rounded-xl mb-6 overflow-hidden relative border border-white/5">
                 <div 
                    className="absolute inset-0 opacity-20 transition-transform group-hover:scale-110 duration-500"
                    style={{ backgroundColor: project.color }}
                 ></div>
                 <div className="absolute inset-0 flex items-center justify-center font-display font-black text-2xl text-white/10 uppercase tracking-tighter">
                    {project.title.split(' ')[0]}
                 </div>
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-white/5 rounded text-gray-500 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5 mt-auto">
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    <FiGithub size={16} /> GitHub
                  </a>
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
