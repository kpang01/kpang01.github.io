import React from 'react';
import '../styles/UniversityPage.css';

const UniversityPage = () => {
  return (
    <div className="university-page">
      <div className="university-hero">
        <div className="hero-content">
          <h1>Universiti Utara Malaysia</h1>
          <p>The Eminent Management University</p>
        </div>
      </div>

      <div className="university-section">
        <h2>About UUM</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Established in 1984, Universiti Utara Malaysia (UUM) is Malaysia's management university, 
              focusing on business, management, economics, IT, public administration, and education. 
              Located in Sintok, Kedah, UUM's pristine 1,061-hectare campus is known for its beautiful 
              natural surroundings and modern facilities.
            </p>
            <p>
              As a premier management university, UUM has consistently ranked among the top Malaysian 
              universities in management and business studies, with international recognition for its 
              quality education and research.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">40</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30,000+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1,061</span>
              <span className="stat-label">Hectares Campus</span>
            </div>
          </div>
        </div>
      </div>

      <div className="university-section">
        <h2>My Experience at UUM</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-date">2021-2025</div>
            <div className="experience-content">
              <h3>Bachelor of Science in Information Technology (Data Science)</h3>
              <p>
                Pursuing my degree at the School of Computing with a CGPA of 3.82/4.00 and consistently on the Dean's List for 6 consecutive semesters.
                Specialized in data science, machine learning, and AI applications through advanced coursework and practical projects.
                Expected to graduate in 2025 after completing my internship at Intel Corporation.
              </p>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-date">2024</div>
            <div className="experience-content">
              <h3>Presenter at Cybersecurity Awareness Event Booth</h3>
              <p>
                Represented University Utara Malaysia by presenting my Final Year Project on speech 
                emotion recognition at a public exhibition booth. Demonstrated practical applications
                of AI in emotion detection from speech patterns.
                Engaged with diverse audiences to explain complex technical concepts in accessible terms.
              </p>
            </div>
          </div>
          
          
          
          
        </div>
      </div>

      <div className="university-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img 
              src="/images/Main_Gate.jpg" 
              alt="UUM Main Gate" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="/images/Library.jpg" 
              alt="Sultanah Bahiyah Library" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="/images/dewan.jpeg" 
              alt="Mu'adzam Shah Hall" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="/images/SOC.jpg" 
              alt="Main Campus - SOC" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="/images/StudentCenter.jpg" 
              alt="Student Center" 
              className="gallery-image"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="/images/SportCentre.jpg" 
              alt="Sports Complex" 
              className="gallery-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityPage;
