import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../../data/experience';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp } from '../../utils/animations';
import styles from './Experience.module.css';

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className={styles.container}>
        <motion.h2 
          variants={fadeUp} 
          initial="hidden" 
          animate={isVisible ? 'visible' : 'hidden'} 
          className="section-title"
        >
          Experience
        </motion.h2>

        <div className={styles.timelineContainer} ref={containerRef}>
          <div className={styles.lineBg}>
            <motion.div className={styles.lineFill} style={{ height: lineHeight }} />
          </div>

          <div className={styles.entries}>
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                className={styles.entry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.dot} />
                <div className={styles.content}>
                  <div className={styles.header}>
                    <h3>{exp.role}</h3>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                  <h4 className={styles.company}>{exp.company}</h4>
                  <p className={styles.description}>{exp.description}</p>
                  <ul className={styles.highlights}>
                    {exp.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
