import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px 20px'
    }}>
      <Helmet>
        <title>404 — Page Not Found | TMS Security</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1 style={{
        fontSize: 'clamp(6rem, 15vw, 12rem)',
        fontWeight: 800,
        color: '#ffd700',
        lineHeight: 1,
        margin: 0
      }}>404</h1>

      <p style={{
        color: '#a1a1aa',
        fontSize: '1.2rem',
        margin: '20px 0 10px',
        letterSpacing: '2px',
        textTransform: 'uppercase'
      }}>Page Not Found</p>

      <p style={{
        color: '#4b5563',
        fontSize: '1rem',
        marginBottom: '40px',
        maxWidth: '400px'
      }}>
        The page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" style={{
        backgroundColor: 'transparent',
        color: '#ffd700',
        border: '1px solid #ffd700',
        padding: '14px 36px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 600,
        fontSize: '0.9rem',
        transition: 'all 0.3s ease'
      }}>
        RETURN TO HOME
      </Link>
    </div>
  );
};

export default NotFound;