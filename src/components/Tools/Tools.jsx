import React from 'react';
import { motion } from 'framer-motion';
import { tools } from '../../data/tools';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp, staggerContainer, slideInLeft } from '../../utils/animations';
import styles from './Tools.module.css';

const Tools = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="tools" className={styles.tools} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          variants={fadeUp} 
          initial="hidden" 
          animate={isVisible ? 'visible' : 'hidden'} 
          className="section-title"
        >
          My Toolbox
        </motion.h2>

        <motion.div 
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {tools.map((tool, index) => (
            <motion.div key={index} variants={slideInLeft} className={styles.toolRow}>
              <div className={styles.toolHeader}>
                <div className={styles.toolInfo}>
                  <h3>{tool.name}</h3>
                  <span className={styles.category}>{tool.category}</span>
                </div>
              </div>
              
              <p className={styles.description}>{tool.description}</p>
              
              <div className={styles.barContainer}>
                <motion.div 
                  className={styles.barFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
