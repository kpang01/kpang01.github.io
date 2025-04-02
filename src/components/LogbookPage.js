import React, { useState } from 'react';
import '../styles/LogbookPage.css';

const LogbookPage = () => {
  // Hardcoded logbook data
  const logbookData = [
    {
      week: 1,
      summary: "Week 1 summary of activities and accomplishments",
      dailyNotes: [
        {
          date: "2024-10-07",
          note: "Set up development environment; Review project requirements; Create initial project structure. Learned about the project architecture and development workflow."
        },
        {
          date: "2024-10-08",
          note: "Implement basic data processing pipeline; Write unit tests for core functions. Gained experience with testing frameworks and data validation."
        },
        {
          date: "2024-10-09",
          note: "Optimize database queries; Implement caching layer. Improved understanding of database optimization techniques."
        },
        {
          date: "2024-10-10",
          note: "Develop API endpoints; Add authentication middleware. Learned about API security best practices."
        },
        {
          date: "2024-10-11",
          note: "Code review and documentation; Team meeting. Enhanced documentation skills and team collaboration."
        }
      ]
    },
    {
      week: 2,
      summary: "Week 2 summary of activities and accomplishments",
      dailyNotes: [
        {
          date: "2024-10-14",
          note: "Implement machine learning model; Set up training pipeline. Learned about ML model deployment and monitoring."
        },
        {
          date: "2024-10-15",
          note: "Optimize model performance; Add feature engineering. Gained insights into model optimization techniques."
        },
        {
          date: "2024-10-16",
          note: "Create data visualization dashboard; Implement real-time updates. Improved skills in data visualization and real-time data handling."
        },
        {
          date: "2024-10-17",
          note: "Write integration tests; Deploy to staging environment. Learned about CI/CD pipelines and deployment strategies."
        },
        {
          date: "2024-10-18",
          note: "Performance testing; Bug fixes and improvements. Enhanced understanding of performance optimization."
        }
      ]
    },
    
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const openModal = (week) => {
    setSelectedWeek(week);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedWeek(null);
  };

  // Calculate internship dates
  const internshipStartDate = new Date('2024-10-07');
  const internshipEndDate = new Date('2024-12-27');
  
  const calculateWeeks = (startDate, endDate) => {
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.ceil((endDate - startDate) / oneWeek);
  };
  
  const totalWeeks = calculateWeeks(internshipStartDate, internshipEndDate);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="logbook-page">
      <h1>Internship Logbook</h1>
      <h2>Track Your Journey</h2>

      <div className="timeline-container">
        {logbookData.map((entry) => (
          <div 
            key={entry.week} 
            className={`timeline-item ${entry.week % 2 === 0 ? 'right' : 'left'}`}
          >
            <div className="timeline-content" onClick={() => openModal(entry)}>
              <div className="timeline-date">
                Week {entry.week} <span>({totalWeeks - entry.week} weeks remaining)</span>
              </div>
              <div className="timeline-summary">
                {entry.summary}
              </div>
              <div className="timeline-click-hint">Click to view details</div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedWeek && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="logbook-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Week {selectedWeek.week} Details</h3>
            <div className="modal-close" onClick={closeModal}>×</div>
            
            <div className="weekly-summary">
              <strong>Weekly Summary</strong>
              <p>{selectedWeek.summary}</p>
            </div>
            
            <div className="daily-notes-grid">
              {selectedWeek.dailyNotes.map((day, index) => (
                <div key={index} className="daily-note-card">
                  <h4>{formatDate(day.date)}</h4>
                  <div className="daily-note-content">
                    <p>{day.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogbookPage;
