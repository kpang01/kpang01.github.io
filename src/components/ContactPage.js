import React, { useState } from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Simulate form submission - replace with actual submission logic
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul className="contact-list">
                <li className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <a href="mailto:pkhongjun@gmail.com">pkhongjun@gmail.com</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <a href="tel:+601137848572">+60 11-3784 8572</a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Ipoh, Perak, Malaysia</p>
                  </div>
                </li>
              </ul>
              
            </div>
            
            
          </div>
          
          
          <div className="social-connect">
            <h3>Connect With Me</h3>
            <div className="social-links">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">GitHub</div>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">LinkedIn</div>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">Twitter</div>
              </a>
            </div>
            
          </div>
          
        </div>
        <div className="resume-section">
              <h3>Resume</h3>
              <p>Feel free to download my resume to learn more about my qualifications, experience, and skills.</p>
              <div className="resume-button-container">
                <a 
                  href="/images/dewan.jpeg" 
                  className="resume-button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
        
        <div className="contact-message">
          <h3>Send Me a Message</h3>
          <div className="form-info-box">
            <p>
              This form sends messages directly to my email inbox. I typically respond within 24-48 hours.
              For urgent matters, please contact me directly via phone or email.
            </p>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus.submitted && (
              <div className="form-success-message">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error-message">
                <p>Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
