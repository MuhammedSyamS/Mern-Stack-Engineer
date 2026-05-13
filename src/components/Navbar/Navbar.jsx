import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/#home', id: 'home' },
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Projects', href: '/#projects', id: 'projects' },
  { name: 'Experience', href: '/#experience', id: 'experience' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'about', 'projects', 'experience', 'contact']);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveId = (id) => {
    if (!isHomePage) return null;
    return activeSection === id;
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <Link to="/" className={styles.logo}>
            
          </Link>

          <div className={styles.desktopLinks}>
            {navLinks.map((link) => (
              <div key={link.name} className={styles.navItem}>
                {isHomePage ? (
                  <a href={link.href} className={styles.link}>
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.href} className={styles.link}>
                    {link.name}
                  </Link>
                )}
                {getActiveId(link.id) && (
                  <motion.div
                    layoutId="underline"
                    className={styles.underline}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            ))}
          </div>

          <a href="/#contact" className={styles.cta}>
            Let's Talk
          </a>

          <button
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiX size={32} />
            </button>
            <div className={styles.mobileLinks}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  {isHomePage ? (
                    <a
                      href={link.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={styles.mobileLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
