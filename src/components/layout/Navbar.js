import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = {
    Personal: [
      { name: 'Internship Journey', path: '/personal/internship' },
      { name: 'Goals', path: '/personal/goals' },
      { name: 'University', path: '/personal/university' },
      { name: 'Logbook', path: '/personal/logbook' }
    ],
    Labs: [
      { name: 'AI', path: '/labs/ai' },
      { name: 'Automation', path: '/labs/automation' },
      { name: 'Data Visualization', path: '/labs/dataviz' },
      { name: 'Brainstorming', path: '/labs/brainstorming' },
      { name: 'Projects', path: '/labs/projects' }
    ],
    
    Contract: [
      { name: 'Details', path: '/contract/details' },
      { name: 'GitHub', path: '/contract/github' },
      
    ]
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <Link to="/" className="logo">
          <span style={{ color: '#5CE1E6' }}>DS</span> Portfolio
        </Link>

        {/* Navigation items on the right */}
        <div className="nav-links">
          {Object.entries(navItems).map(([category, items]) => (
            <div
              key={category}
              className="nav-item"
              onMouseEnter={() => setActiveDropdown(category)}
              onMouseLeave={() => setActiveDropdown(null)}
              style={{ position: 'relative' }}
            >
              <Link
                to={items[0].path}
                className="nav-link"
                style={{
                  color: activeDropdown === category ? '#5CE1E6' : '#FFFFFF',
                  transition: 'color 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {category}
              </Link>
              
              {activeDropdown === category && (
                <div className="dropdown-menu" style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'rgba(0, 4, 15, 0.95)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '12px',
                  padding: '12px 0',
                  minWidth: '200px',
                  boxShadow: '0 4px 20px rgba(92, 225, 230, 0.15)',
                  border: '1px solid rgba(92, 225, 230, 0.1)',
                  marginTop: '10px',
                }}>
                  {items.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="dropdown-item"
                      style={{
                        display: 'block',
                        padding: '10px 20px',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        animation: `fadeInUp 0.3s ease forwards ${index * 0.05}s`,
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 