import React from 'react';
import '../styles/Contact.css'; // Ensure CSS is imported

const Contact = () => {
  return (
    // Remove id, no longer needed
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Feel free to reach out via email or connect with me on LinkedIn or GitHub.
        </p>

        <div className="contact-container">
          {/* Contact Info Items */}
          <div className="contact-info">
             <div className="contact-item">
              <span className="icon"><i className="fas fa-envelope"></i></span> {/* FontAwesome Email Icon */}
              <div className="contact-text">
                <h3>Email</h3>
                <p><a href="mailto:pkhongjun@gmail.com">pkhongjun@gmail.com</a></p>
              </div>
            </div>

            <div className="contact-item">
               <span className="icon"><i className="fas fa-phone"></i></span> {/* FontAwesome Phone Icon */}
              <div className="contact-text">
                <h3>Phone</h3>
                <p>+601137848572</p>
              </div>
            </div>

             <div className="contact-item">
               <span className="icon"><i className="fas fa-map-marker-alt"></i></span> {/* FontAwesome Location Icon */}
              <div className="contact-text">
                <h3>Location</h3>
                <p>Ipoh Perak, Malaysia</p> {/* Generalize location */}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links-wrapper"> {/* Wrapper for centering */}
            <ul className="social-links">
              <li>
                <a href="https://www.linkedin.com/in/pang-khong-jun-87849330a" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i> {/* FontAwesome LinkedIn Icon */}
                </a>
              </li>
              <li>
                <a href="https://github.com/Khongjunpang" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <i className="fab fa-github"></i> {/* FontAwesome GitHub Icon */}
                </a>
              </li>
              {/* Add other social links here if needed */}
            </ul>
          </div>

          {/* Removed Contact Form */}
          {/* <div className="contact-form"> ... </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
