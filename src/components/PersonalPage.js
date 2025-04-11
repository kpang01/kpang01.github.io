import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import sub-page components
import LogbookPage from './LogbookPage';
import UniversityPage from './UniversityPage';
// Import styles if needed for the container or specific sections
import '../styles/UniversityPage.css';

const PersonalPage = () => {
  useEffect(() => {
    // Add loaded class to body for animations on this page
    document.body.classList.add('loaded');
    return () => document.body.classList.remove('loaded');
  }, []);

  return (
    // Container for the Personal page content
    <div className="personal-page-container" style={{ paddingTop: '100px', color: 'var(--white)' }}>

      {/* Render Logbook Component */}
      {/* The LogbookPage component itself contains a <section> tag */}
      <UniversityPage />

      {/* Internship Journey Section */}
      <section id="internship-section" className="university-section alt-bg" style={{ padding: '80px 20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--cyan-highlight)' }}>Internship Journey</h2>
          <div className="internship-container">
            <div className="internship-header">
              <div className="company-logo">
                <img 
                  src="/images/Intel.png" 
                  alt="Intel Logo" 
                  className="company-logo-image"
                />
              </div>
              <div className="internship-intro">
                <h3>Data Science Intern</h3>
                <p className="internship-period">October 2024 - April 2025 | Intel KM6, Kulim</p>
              </div>
            </div>
            
            <div className="internship-reflection">
              <p>Reflections and details about the internship experience at Intel... (Content under construction)</p>
              <div className="construction-indicator">
                <div className="construction-icon">🚧</div>
                <p>This section is currently being developed with more detailed information about my internship journey, including projects, achievements, and personal growth. Check back soon for updates!</p>
              </div>
            </div>
            
            {/* Protected Logbook Link */}
            <div className="protected-logbook-link" style={{ marginTop: '30px', textAlign: 'center' }}>
              <Link to="/protected-logbook" style={{ 
                display: 'inline-block',
                padding: '12px 25px',
                backgroundColor: '#1a237e',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease'
              }}>
                Access Detailed Logbook (Password Protected)
              </Link>
              <p style={{ 
                fontSize: '0.9rem', 
                marginTop: '10px', 
                color: '#757575' 
              }}>
                Requires authorization for detailed daily logbook with images
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Render University Component */}
      {/* The UniversityPage component itself contains a <section> tag */}
      <LogbookPage />

    </div>
  );
};

export default PersonalPage;
