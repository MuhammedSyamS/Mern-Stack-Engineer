import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import styles from './Hero.module.css';
import { blurIn, staggerContainer } from '../../utils/animations';

const roles = ["MERN Stack Engineer", "React.js Developer", "Node.js Backend", "Software Engineer"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting) {
        setDisplayedText((prev) => currentRole.substring(0, prev.length + 1));
        
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText((prev) => currentRole.substring(0, prev.length - 1));
        
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleType, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const titleWords = "Hi, I'm Muhammed Syam".split(' ');

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundMesh}></div>
      
      <div className={styles.container}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className={styles.content}
        >
          <motion.h1 className={styles.title}>
            {titleWords.map((word, index) => (
              <motion.span key={index} variants={blurIn} className={styles.word}>
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div variants={blurIn} className={styles.roleContainer}>
            <span className={styles.roleText}>{displayedText}</span>
            <span className={styles.cursor}>|</span>
          </motion.div>

          <motion.p variants={blurIn} className={styles.description}>
            I craft responsive, high-performance web applications with modern technologies.
            Specializing in the MERN stack with a keen eye for design and user experience.
          </motion.p>

          <motion.div variants={blurIn} className={styles.statsContainer}>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className={styles.statCard}>
              <h3>5+</h3>
              <p>Months Experience</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className={styles.statCard}>
              <h3>2</h3>
              <p>Projects Built</p>
            </motion.div>
            <motion.div whileHover={{ y: -8, scale: 1.02 }} className={styles.statCard}>
              <h3>100%</h3>
              <p>Dedication</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
        >
          <FiArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
