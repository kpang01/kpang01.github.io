import React from 'react';

function Goals() {
  const goals = [
    {
      category: 'Technical Skills',
      items: [
        'Master Advanced Machine Learning Algorithms',
        'Deep Learning Specialization',
        'Data Visualization Expertise',
        'Big Data Processing'
      ]
    },
    {
      category: 'Professional Growth',
      items: [
        'Research Publications',
        'Industry Certifications',
        'Conference Presentations',
        'Project Portfolio'
      ]
    },
    {
      category: 'Academic Excellence',
      items: [
        'Maintain High GPA',
        'Research Contributions',
        'Academic Competitions',
        'Peer Mentoring'
      ]
    }
  ];

  return (
    <div className="page-container">
      <h1>Career <span className="glow-text">Goals</span></h1>
      <div className="content-wrapper">
        <div className="goals-grid">
          {goals.map((section, index) => (
            <div 
              key={section.category}
              className="goal-card"
              style={{
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
              }}
            >
              <h2>{section.category}</h2>
              <ul>
                {section.items.map((item, i) => (
                  <li 
                    key={i}
                    style={{
                      animation: `fadeInLeft ${0.5 + i * 0.1}s ease-out`
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Goals; 