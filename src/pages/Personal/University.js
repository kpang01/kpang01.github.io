import React from 'react';

function University() {
  const courses = [
    {
      semester: 'Current Semester',
      subjects: [
        'Advanced Machine Learning',
        'Statistical Computing',
        'Data Mining',
        'Neural Networks'
      ]
    },
    {
      semester: 'Completed Courses',
      subjects: [
        'Introduction to AI',
        'Database Systems',
        'Algorithm Design',
        'Mathematics for ML'
      ]
    }
  ];

  const achievements = [
    'Dean\'s List 2023',
    'Research Assistant - AI Lab',
    'Data Science Club President',
    'Hackathon Winner 2023'
  ];

  return (
    <div className="page-container">
      <h1>University <span className="glow-text">Journey</span></h1>
      <div className="content-wrapper">
        <div className="university-grid">
          <div className="courses-section">
            <h2>Academic Progress</h2>
            {courses.map((term, index) => (
              <div 
                key={term.semester}
                className="semester-card"
                style={{
                  animation: `fadeInRight ${0.3 + index * 0.1}s ease-out`
                }}
              >
                <h3>{term.semester}</h3>
                <ul>
                  {term.subjects.map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="achievements-section">
            <h2>Achievements</h2>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="achievement-card"
                  style={{
                    animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
                  }}
                >
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default University; 