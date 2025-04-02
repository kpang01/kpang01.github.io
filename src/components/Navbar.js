import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo links to Home */}
        <Link to="/" className="logo logo-animation">
          <span role="img" aria-label="logo-icon" style={{ marginRight: '8px' }}>🔹</span>
          DS Portfolio
        </Link>
        <ul className="nav-links">
          {/* Updated links */}
          <li><Link to="/personal" className="nav-link">Personal</Link></li> {/* Changed from Logbook */}
          {/* University content moved to Personal page */}
          <li><Link to="/labs" className="nav-link">Labs</Link></li>
          <li><Link to="/contacts" className="nav-link">Contact</Link></li>
          
          {/* Add /personal or /contact links here if desired as separate pages */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
