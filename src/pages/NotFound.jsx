import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import PageTransition from '../components/PageTransition/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <h1 style={{ fontSize: '8rem', color: 'var(--accent)', margin: 0, lineHeight: 1 }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Page Not Found</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '400px' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            background: 'var(--text)',
            color: 'var(--bg)',
            borderRadius: 'var(--radius-sm)',
            fontWeight: 600
          }}
        >
          <FiHome /> Back to Home
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFound;
