import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AIVisual from './components/AIVisual';
import Layout from './components/layout/Layout';
import './styles/animations.css';

function MainPage() {
  useEffect(() => {
    document.body.classList.add('loaded');
  }, []);

  return (
    <div className="main-container" style={{
      minHeight: '100vh',
      background: 'linear-gradient(130deg, #00040F 60%, #001F3F 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '160px 40px 40px',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'center',
      }}>
        <div className="fade-in-left">
          <div className="badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(92, 225, 230, 0.1)',
            padding: '8px 16px',
            borderRadius: '20px',
            marginBottom: '24px'
          }}>
            <span style={{ color: '#5CE1E6' }}>👨‍💻</span>
            <span style={{ color: '#FFFFFF' }}>Data Science Intern</span>
          </div>

          <h1 style={{
            fontSize: '64px',
            marginBottom: '20px',
            lineHeight: '1.1',
            fontWeight: 'bold'
          }}>
            The Next
            <br />
            <span style={{ 
              color: '#5CE1E6',
              display: 'block' 
            }}>Generation</span>
            Data Science.
          </h1>

          <p style={{
            fontSize: '18px',
            marginBottom: '40px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '500px',
            lineHeight: '1.6'
          }}>
            Passionate about machine learning, statistical analysis,
            and data visualization. Focused on extracting
            meaningful insights from complex datasets.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px'
          }}>
            <button className="button-primary" style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              background: '#5CE1E6',
              border: 'none',
              color: '#00040F',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              View Projects
            </button>
            <button className="button-secondary" style={{
              padding: '12px 24px',
              fontSize: '16px',
              borderRadius: '8px',
              background: 'transparent',
              border: '1px solid rgba(92, 225, 230, 0.5)',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              See Analysis
            </button>
          </div>
        </div>

        <div className="fade-in-right">
          <AIVisual />
        </div>
      </main>

      <div className="orb top-left"></div>
      <div className="orb bottom-right"></div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {/* Reference to existing routes */}
          <Route path="/personal/*" />
          <Route path="/labs/*" />
          <Route path="/research/*" />
          <Route path="/contract/*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
