'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={styles.cardWrapper}
    >
      {project.featured ? (
        <motion.div
          className={`${styles.card} ${styles.featured}`}
          style={{ rotateX, rotateY, zIndex: 10 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.02 }}
        >
          <div className={styles.imageContainer} style={{ backgroundColor: project.imageBg || 'var(--bg2)' }}>
            {project.image ? (
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            ) : (
              <div className={styles.imagePlaceholder} style={{ backgroundColor: project.color }}>
                <span>{project.title} Preview</span>
              </div>
            )}
            <div className={styles.overlay}>
              <div className={styles.links}>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.iconLink}>
                  <FiExternalLink />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.iconLink}>
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
          
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.category} style={{ color: project.color }}>{project.category}</span>
              <h3 className={styles.title}>{project.title}</h3>
            </div>
            
            <p className={styles.description}>{project.description}</p>
            
            <div className={styles.stack}>
              {project.stack.map(tech => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
            </div>
            
            <Link href={`/projects/${project.slug}`} className={styles.detailsBtn}>
              View Details <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      ) : (
        <motion.div className={styles.card} whileHover={{ y: -10 }}>
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.category} style={{ color: project.color }}>{project.category}</span>
              <h3 className={styles.title}>{project.title}</h3>
            </div>
            
            <p className={styles.description}>{project.description}</p>
            
            <div className={styles.stack}>
              {project.stack.map(tech => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
            </div>
            
            <div className={styles.footer}>
              <Link href={`/projects/${project.slug}`} className={styles.detailsBtn}>
                View Details <FiArrowRight />
              </Link>
              <div className={styles.smallLinks}>
                <a href={project.liveUrl} target="_blank" rel="noreferrer"><FiExternalLink /></a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer"><FiGithub /></a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
