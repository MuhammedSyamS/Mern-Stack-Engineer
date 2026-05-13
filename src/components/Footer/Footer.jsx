import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>Muhammed Syam<span>.</span></h2>
            <p>Building digital experiences that matter.</p>
            <a href="mailto:muhammedsyam.dev@gmail.com" className={styles.footerEmail}>muhammedsyam.dev@gmail.com</a>
          </div>
          
          <div className={styles.socials}>
            <a href="https://github.com/MuhammedSyamS" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/muhammed-syam-s" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://x.com/SaifudheenSham" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.instagram.com/__sham_saifudeen__?igsh=MTg1MXBkejlsOXp5bw==" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
            <a href="https://wa.me/917736815824" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear} Muhammed Syam S. All rights reserved.</p>
          <div className={styles.links}>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
