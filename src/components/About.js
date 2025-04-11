import React from 'react';
import '../styles/About.css'; // Ensure CSS is imported

const About = () => {
  return (
    // Remove id, no longer needed
    <section className="about-section">
      <div className="container"> {/* Use container for consistent padding/width */}
        <h2 className="section-title">About Me</h2>
        <div className="about-content-single-col"> {/* Use a single column layout */}
          <div className="about-text">
            <h3>Professional Summary</h3>
            <p>
              Fresh graduate in Information Technology with a strong foundation in software development, cloud computing, and AI-driven solutions. Data Science Intern at Intel, working on ticket management using LLM. Passionate about full-stack development, AI applications, and optimizing models for real-world implementation. Experienced in JavaScript, Java, Python, React, Node.js, and cloud technologies. Fluent in Chinese, English, and Malay.
            </p>

            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Science (Honors) in Information Technology (Data Science)</h4>
              <p className="institution">Universiti Utara Malaysia (2021 - 2025)</p>
              <p className="details">CGPA: 3.82/4.00</p>
              <p className="details">Dean's List (6 Consecutive Semesters)</p>
              <p className="details">Expected Graduation: May 2025</p>
            </div>

            {/* Removed image placeholder and details grid */}
            {/* Add download resume button if resume file exists */}
            {/* <a href="/path/to/resume.pdf" className="button-primary" download>Download Resume</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
