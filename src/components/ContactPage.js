import React, { useState } from 'react';
import '../styles/ContactPage.css';

function ContactPage(){
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    try{
      const response = await fetch('https://messageapi-bifx.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        setFormStatus({ submitting: false, submitted: true, error: false});
        // clean form after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error('Error submitting form:', errorData);
        setFormStatus({ submitting: false, submitted: false, error: true });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
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
              <a href="https://github.com/kpang01" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">GitHub</div>
              </a>
              <a href="https://linkedin.com/in/pang-khong-jun-87849330a" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">LinkedIn</div>
              </a>
              <a href="https://discord.com/users/833959241718038530" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon">Discord</div>
              </a>
            </div>
            
          </div>
          
        </div>
        <div className="resume-section">
              <h3>Resume</h3>
              <p>Feel free to download my resume to learn more about my qualifications, experience, and skills.</p>
              <div className="resume-button-container">
                <a 
                  href="images/Pang Resume - Python Developer.pdf" 
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
