import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    institution: 'Indira Gandhi National Open University (IGNOU)',
    status: 'Currently Pursuing'
  },
  {
    degree: 'Computer Science',
    institution: "St Mary's Senior Higher Secondary",
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-gray-500">My academic background and qualifications.</p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 border-white/5 hover:border-brand-primary/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.degree}</h3>
                  <p className="text-brand-secondary font-medium">{item.institution}</p>
                </div>
                <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 w-fit">
                  {item.status}
                </span>
              </div>
              {item.description && (
                <p className="text-gray-400 leading-relaxed mt-4">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
