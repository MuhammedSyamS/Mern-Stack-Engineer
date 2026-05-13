import React from 'react';
import { motion } from 'framer-motion';
import { useCursorFollower } from '../../hooks/useCursorFollower';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
  const { x, y, dotX, dotY, isHovering, isClicking } = useCursorFollower();

  // On mobile screens, we hide the custom cursor in CSS
  return (
    <>
      <motion.div
        className={styles.cursorRing}
        style={{ x, y }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          borderColor: isHovering ? 'var(--accent)' : 'var(--border)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.div
        className={styles.cursorDot}
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: isClicking ? 0 : isHovering ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
