import React, { useState, useEffect } from 'react';
import '../styles/ProtectedLogbookPage.css';

const ProtectedLogbookPage = () => {
  const [logbookData, setLogbookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  // The correct password - in a real app, this would be handled securely on a server
  const correctPassword = ''; // Change this to your desired password

  useEffect(() => {
    if (authenticated) {
      // Only fetch data if authenticated
      fetch('/data/logbook.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch logbook data');
          }
          return response.json();
        })
        .then(data => {
          // Add hasImage field to each entry based on data or availability
          const enhancedData = data.map(entry => ({
            ...entry,
            hasImage: entry.hasImage || false // Use hasImage from data or default to false
          }));
          setLogbookData(enhancedData);
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching logbook data:', err);
          setError('Failed to load logbook data. Please try again later.');
          setLoading(false);
        });
    }
  }, [authenticated]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password. Please try again.');
    }
  };

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

  if (!authenticated) {
    return (
      <div className="protected-logbook-page password-screen">
        <h1>Protected Logbook</h1>
        <p>Please enter password to view the detailed logbook</p>
        
        <form onSubmit={handlePasswordSubmit} className="password-form">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="password-input"
          />
          <button type="submit" className="password-submit-btn">Access Logbook</button>
        </form>
        
        {passwordError && <p className="password-error">{passwordError}</p>}
      </div>
    );
  }

  if (loading) {
    return <div className="loading-message">Loading logbook data...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="protected-logbook-page" style={{ paddingTop: '100px' }}>
      <h1>Internship Logbook</h1>
      <h2>Secured Note & Images</h2>
      
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
              <div className="timeline-click-hint">
                Click to view details {entry.hasImage && <span className="image-indicator">📷</span>}
              </div>
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

            {selectedWeek.hasImage && (
              <div className="week-image-container">
                <h4>Week {selectedWeek.week} Image</h4>
                <div className="image-preview-container">
                  <img 
                    src={`/images/logbook/week${selectedWeek.week}.jpg`} 
                    alt={`Week ${selectedWeek.week}`} 
                    className="week-image-preview" 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
              </div>
            )}
            
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

export default ProtectedLogbookPage; 