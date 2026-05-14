'use client'

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '@/data/projects';
import PageTransition from '@/components/PageTransition/PageTransition';
import { fadeUp, staggerContainer } from '@/utils/animations';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <PageTransition>
        <div className={styles.notFound}>
          <h2>Project Not Found</h2>
          <button onClick={() => router.push('/#projects')} className={styles.backBtn}>
            <FiArrowLeft /> Back to Projects
          </button>
        </div>
      </PageTransition>
    );
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <PageTransition>
      <main className={styles.projectDetail}>
        <div className={styles.hero} style={{ backgroundColor: project.color ? `${project.color}15` : 'var(--bg2)' }}>
          <div className={styles.container}>
            <Link href="/#projects" className={styles.backLink}>
              <FiArrowLeft /> Back to Work
            </Link>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className={styles.heroContent}
            >
              <motion.span variants={fadeUp} className={styles.category} style={{ color: project.color }}>
                {project.category}
              </motion.span>
              <motion.h1 variants={fadeUp} className={styles.title}>{project.title}</motion.h1>
              <motion.p variants={fadeUp} className={styles.subtitle}>{project.subtitle}</motion.p>
              
              <motion.div variants={fadeUp} className={styles.links}>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                  View Live <FiExternalLink />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
                  {project.githubBackendUrl ? 'Frontend Code' : 'Source Code'} <FiGithub />
                </a>
                {project.githubBackendUrl && (
                  <a href={project.githubBackendUrl} target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
                    Backend Code <FiGithub />
                  </a>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.mainCol}>
              <section className={styles.section}>
                <h2>Overview</h2>
                <p>{project.longDescription}</p>
              </section>

              <section className={styles.section}>
                <h2>Challenges & Solutions</h2>
                <p>
                  One of the main challenges was ensuring real-time synchronization across multiple clients
                  without degrading performance. This was solved by implementing an optimized WebSocket
                  architecture with Redis pub/sub for scaling across multiple instances.
                </p>
                <p>
                  Additionally, the UI needed to handle large amounts of data. We implemented virtual scrolling
                  and careful memoization in React to keep the interface smooth and responsive.
                </p>
              </section>
            </div>

            <div className={styles.sideCol}>
              <div className={styles.infoBox}>
                <h3>Tech Stack</h3>
                <div className={styles.stack}>
                  {project.stack.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.infoBox}>
                <h3>Key Features</h3>
                <ul className={styles.featureList}>
                  <li>Real-time updates</li>
                  <li>Responsive design</li>
                  <li>Secure authentication</li>
                  <li>Performance optimized</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.related}>
            <h2>More Projects</h2>
            <div className={styles.relatedGrid}>
              {relatedProjects.map(p => (
                <Link href={`/projects/${p.slug}`} key={p.id} className={styles.relatedCard}>
                  <div className={styles.relatedImage} style={{ backgroundColor: p.imageBg || p.color }}>
                    {p.image ? (
                      <img src={p.image} alt={p.title} className={styles.projectImage} />
                    ) : (
                      <span>{p.title}</span>
                    )}
                  </div>
                  <div className={styles.relatedInfo}>
                    <h3>{p.title}</h3>
                    <span className={styles.relatedCategory}>{p.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default ProjectDetail;
