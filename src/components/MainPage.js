import React, { useEffect } from 'react';
import AIVisual from './AIVisual';
// Re-import section components
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function MainPage() {
  useEffect(() => {
    // Add loaded class to body for animations on this page
    document.body.classList.add('loaded');
    return () => document.body.classList.remove('loaded');
  }, []);

  return (
    // This component now renders the Hero + Sections for the "/" route
    <>
      {/* Hero Section Container */}
      <div className="main-container" style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Hero Section Content */}
        <section className="hero-content-wrapper" style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '160px 40px 40px',
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="fade-in-left hero-text">
            <div className="badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--green-tint, rgba(92, 225, 230, 0.1))',
              padding: '8px 16px',
              borderRadius: '20px',
              marginBottom: '24px'
            }}>
              <span style={{ color: 'var(--cyan-highlight, #5CE1E6)' }}>👨‍💻</span>
              <span style={{ color: 'var(--white, #FFFFFF)' }}>Data Science Intern @ Intel</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(40px, 8vw, 64px)',
              marginBottom: '20px',
              lineHeight: '1.1',
              fontWeight: 'bold',
              color: 'var(--white, #FFFFFF)'
            }}>
              Pang Khong Jun
              <br />
              <span className="gradient-text" style={{ display: 'block' }}>
                IT Graduate
              </span>
               & AI Enthusiast.
            </h1>

            <p style={{
              fontSize: 'var(--fz-lg, 18px)',
              marginBottom: '40px',
              color: 'var(--light-slate, rgba(255, 255, 255, 0.7))',
              maxWidth: '500px',
              lineHeight: '1.6'
            }}>
              Fresh graduate in Information Technology with a strong foundation in software development, cloud computing, and AI-driven solutions. Passionate about full-stack development, AI applications, and optimizing models for real-world implementation.
            </p>

            <div style={{ display: 'flex', gap: '20px' }}>
              {/* Button can be a regular button or link to a specific project page if desired */}
              <button className="button-primary">
                View Projects
              </button>
            </div>
          </div>

          <div className="ai-visual-grid-item fade-in-right" style={{ position: 'relative' }}>
            <AIVisual />
          </div>
        </section>

        {/* Orbs positioned relative to the hero container */}
        <div className="orb top-left"></div>
        <div className="orb bottom-right"></div>
      </div>

      {/* Render other sections directly after the hero section *within* MainPage */}
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default MainPage;
