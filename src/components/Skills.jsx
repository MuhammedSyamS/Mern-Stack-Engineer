import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiDatabase, FiLayout, FiServer, FiTerminal, FiSettings 
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FiLayout className="text-brand-secondary" />,
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind']
  },
  {
    title: 'Backend',
    icon: <FiServer className="text-brand-primary" />,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JSON Server']
  },
  {
    title: 'Tools',
    icon: <FiTerminal className="text-gray-400" />,
    skills: ['Git', 'GitHub', 'Postman', 'Vercel']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-500 italic">"These technologies are used across my real-world projects."</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-brand-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-left">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-brand-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
