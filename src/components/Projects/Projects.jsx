'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { fadeUp } from '../../utils/animations';
import styles from './Projects.module.css';

const categories = ['All', 'MERN', 'SaaS', 'API', 'Real-time'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, isVisible } = useScrollReveal();

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.filterTags ? p.filterTags.includes(activeFilter) : p.category.includes(activeFilter));

  return (
    <section id="projects" className={styles.projects} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            variants={fadeUp} 
            initial="hidden" 
            animate={isVisible ? 'visible' : 'hidden'} 
            className="section-title"
          >
            Selected Work
          </motion.h2>
          
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            className={styles.filters}
          >
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {activeFilter === category && (
                  <motion.div layoutId="filterIndicator" className={styles.activeIndicator} />
                )}
                <span className={styles.filterText}>{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
