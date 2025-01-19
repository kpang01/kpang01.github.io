import React, { useState } from 'react';

function Brainstorming() {
  const [ideas, setIdeas] = useState([
    {
      title: 'AI-Powered Analytics',
      category: 'Innovation',
      description: 'Implementing machine learning for predictive analytics',
      votes: 5,
      status: 'in-progress'
    },
    {
      title: 'Automated Report Generation',
      category: 'Automation',
      description: 'Creating automated systems for report generation',
      votes: 3,
      status: 'proposed'
    }
  ]);

  const [newIdea, setNewIdea] = useState({
    title: '',
    category: 'Innovation',
    description: ''
  });

  const handleVote = (index) => {
    const updatedIdeas = [...ideas];
    updatedIdeas[index].votes += 1;
    setIdeas(updatedIdeas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdeas([...ideas, { ...newIdea, votes: 0, status: 'proposed' }]);
    setNewIdea({ title: '', category: 'Innovation', description: '' });
  };

  return (
    <div className="page-container">
      <h1>Brainstorming <span className="glow-text">Lab</span></h1>
      <div className="content-wrapper">
        <div className="ideas-container">
          <form onSubmit={handleSubmit} className="idea-form">
            <input
              type="text"
              placeholder="Idea Title"
              value={newIdea.title}
              onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
            />
            <select
              value={newIdea.category}
              onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}
            >
              <option value="Innovation">Innovation</option>
              <option value="Automation">Automation</option>
              <option value="Research">Research</option>
            </select>
            <textarea
              placeholder="Description"
              value={newIdea.description}
              onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
            />
            <button type="submit">Add Idea</button>
          </form>

          <div className="ideas-grid">
            {ideas.map((idea, index) => (
              <div 
                key={index}
                className="idea-card"
                style={{
                  animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
                }}
              >
                <div className="idea-header">
                  <span className={`status ${idea.status}`}>{idea.status}</span>
                  <span className="category">{idea.category}</span>
                </div>
                <h3>{idea.title}</h3>
                <p>{idea.description}</p>
                <div className="idea-footer">
                  <button 
                    className="vote-button"
                    onClick={() => handleVote(index)}
                  >
                    👍 {idea.votes}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brainstorming; 