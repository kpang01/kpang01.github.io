import React from 'react';

function Logbook() {
  const entries = [
    {
      date: '2024-03-15',
      title: 'Neural Network Implementation',
      category: 'Technical',
      description: 'Implemented a deep learning model for image classification',
      learnings: [
        'Optimized model architecture',
        'Improved data preprocessing',
        'Enhanced validation methods'
      ]
    },
    {
      date: '2024-03-14',
      title: 'Data Visualization Project',
      category: 'Analysis',
      description: 'Created interactive dashboards for data analysis',
      learnings: [
        'D3.js implementation',
        'Real-time data updates',
        'User interaction patterns'
      ]
    },
    // Add more entries as needed
  ];

  return (
    <div className="page-container">
      <h1>Daily <span className="glow-text">Logbook</span></h1>
      <div className="content-wrapper">
        <div className="logbook-container">
          {entries.map((entry, index) => (
            <div 
              key={entry.date}
              className="logbook-entry"
              style={{
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
              }}
            >
              <div className="entry-header">
                <span className="entry-date">{entry.date}</span>
                <span className={`entry-category ${entry.category.toLowerCase()}`}>
                  {entry.category}
                </span>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <div className="learnings">
                <h4>Key Learnings:</h4>
                <ul>
                  {entry.learnings.map((learning, i) => (
                    <li 
                      key={i}
                      style={{
                        animation: `fadeInLeft ${0.5 + i * 0.1}s ease-out`
                      }}
                    >
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logbook; 