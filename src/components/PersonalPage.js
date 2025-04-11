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
              <div className="internship-project">
                <h4>Large Language Model Implementation</h4>
                <p>
                  Working on the repeat ticket management system for semiconductor manufacturing, implementing 
                  advanced LLM techniques to replace traditional keyword-based search algorithms. This project 
                  significantly improves the efficiency of identifying similar maintenance tickets, reducing 
                  duplicate efforts and accelerating problem resolution times.
                </p>
              </div>
              
              <div className="internship-project">
                <h4>Production Monitoring Dashboard</h4>
                <p>
                  Developing data visualization dashboards using Power BI to monitor and analyze manufacturing 
                  operator performance metrics. These visualizations provide real-time insights that help 
                  management identify training needs and optimize production workflows.
                </p>
              </div>
              
              <div className="internship-skills-gained">
                <h4>Key Skills & Technologies</h4>
                <ul className="skills-list">
                  <li>Vector databases for semantic search implementation</li>
                  <li>LLM fine-tuning for domain-specific applications</li>
                  <li>Python development for production-level applications</li>
                  <li>Power BI dashboard development</li>
                  <li>Cross-functional collaboration with technical and business teams</li>
                  <li>Manufacturing process analysis and optimization</li>
                </ul>
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
