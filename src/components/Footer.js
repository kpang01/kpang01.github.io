import React from 'react';
import '../styles/Footer.css'; // Ensure CSS is imported

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const userEmail = "pkhongjun@gmail.com"; // User's email
  const userLinkedIn = "https://www.linkedin.com/in/pang-khong-jun-87849330a";
  const userGitHub = "https://github.com/Khongjunpang";

  return (
    <footer className="footer">
      <div className="footer-container"> {/* Use a container */}
        <div className="footer-content"> {/* Wrapper for columns */}
          {/* Left Column */}
          <div className="footer-left">
            <h3 className="footer-title">Data Science Portfolio</h3>
            <p className="footer-tagline">Exploring the frontiers of AI and Data Science</p>
          </div>

          {/* Right Column */}
          <div className="footer-right">
            <ul className="footer-links">
              <li><a href={userGitHub} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={userLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href={`mailto:${userEmail}`}>Email</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Pang Khong Jun. All rights reserved. {/* Updated copyright text */}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
