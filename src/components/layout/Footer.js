import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'rgba(0, 4, 15, 0.95)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid rgba(92, 225, 230, 0.1)',
      padding: '2rem 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <div className="footer-left">
          <h3 style={{ 
            color: '#5CE1E6',
            marginBottom: '1rem' 
          }}>
            Data Science Portfolio
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Exploring the frontiers of AI and Data Science
          </p>
        </div>

        <div className="footer-right">
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#5CE1E6'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#5CE1E6'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              style={{
                color: '#FFFFFF',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#5CE1E6'}
              onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        marginTop: '2rem',
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 