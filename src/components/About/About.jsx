import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '../../utils/animations';
import styles from './About.module.css';

const useCountUp = (end, duration = 2000, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, trigger]);

  return count;
};

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const monthsCount = useCountUp(5, 2000, isVisible);
  const projectsCount = useCountUp(2, 2000, isVisible);
  const learningCount = useCountUp(100, 2000, isVisible);

  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Express', 'MongoDB', 'PostgreSQL', 'HTML/CSS', 
    'Git', 'Docker', 'AWS'
  ];

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className={styles.grid}
        >
          <div className={styles.content}>
            <motion.h2 variants={fadeUp} className="section-title">
              About Me
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.text}>
              Hello! I'm Muhammed Syam S, a 20-year-old passionate MERN Stack Engineer currently working at HighPhaus.
              I'm also pursuing my BCA degree at Indira Gandhi National Open University (IGNOU).
            </motion.p>
            <motion.p variants={fadeUp} className={styles.text}>
              As a fresher entering the industry recently, I've already had the opportunity to work on amazing production applications.
              I enjoy creating things that live on the internet, focusing on building high-performance, responsive web experiences with modern technologies.
            </motion.p>
            
            <motion.div variants={fadeUp} className={styles.skillsContainer}>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={styles.skillTag}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className={styles.highlights}>
            <motion.div variants={fadeUp} whileHover="hover" className={styles.highlightCard}>
              <motion.div className={styles.cardContent} variants={{ hover: { x: 10 } }}>
                <h3>{monthsCount}+</h3>
                <p>Months of Experience</p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover="hover" className={styles.highlightCard}>
              <motion.div className={styles.cardContent} variants={{ hover: { x: 10 } }}>
                <h3>{projectsCount}+</h3>
                <p>Projects Completed</p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeUp} whileHover="hover" className={styles.highlightCard}>
              <motion.div className={styles.cardContent} variants={{ hover: { x: 10 } }}>
                <h3>{learningCount}%</h3>
                <p>Dedication & Learning</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
