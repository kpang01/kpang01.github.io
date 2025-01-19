import React from 'react';

function Details() {
  const contractDetails = {
    position: 'Data Science Intern',
    duration: '6 months',
    startDate: 'January 2024',
    endDate: 'June 2024',
    department: 'AI Research & Development',
    supervisor: 'Dr. Data Scientist',
    workingHours: '40 hours/week',
    location: 'Hybrid (3 days office, 2 days remote)'
  };

  const responsibilities = [
    'Develop and implement machine learning models',
    'Conduct data analysis and visualization',
    'Participate in research projects',
    'Create automated data pipelines',
    'Document technical processes',
    'Collaborate with cross-functional teams'
  ];

  return (
    <div className="page-container">
      <h1>Contract <span className="glow-text">Details</span></h1>
      <div className="content-wrapper">
        <div className="details-grid">
          <div className="contract-info">
            <h2>Internship Information</h2>
            {Object.entries(contractDetails).map(([key, value], index) => (
              <div 
                key={key} 
                className="info-item"
                style={{
                  animation: `fadeInLeft ${0.3 + index * 0.1}s ease-out`
                }}
              >
                <span className="info-label">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>

          <div className="responsibilities-section">
            <h2>Key Responsibilities</h2>
            <ul className="responsibilities-list">
              {responsibilities.map((item, index) => (
                <li 
                  key={index}
                  style={{
                    animation: `fadeInRight ${0.3 + index * 0.1}s ease-out`
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details; 