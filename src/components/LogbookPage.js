import React, { useState, useEffect } from 'react';
import '../styles/LogbookPage.css';

const LogbookPage = () => {
  const [logbookData, setLogbookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    // Fetch logbook data from JSON file
    fetch('/data/logbook.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch logbook data');
        }
        return response.json();
      })
      .then(data => {
        setLogbookData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching logbook data:', err);
        setError('Failed to load logbook data. Please try again later.');
        setLoading(false);
      });
  }, []);

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
  const internshipEndDate = new Date('2025-04-08');
  
  const calculateWeeks = (startDate, endDate) => {
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    return Math.ceil((endDate - startDate) / oneWeek);
  };
  
  const totalWeeks = calculateWeeks(internshipStartDate, internshipEndDate);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return <div className="loading-message">Loading logbook data...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

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
