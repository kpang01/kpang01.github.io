import React, { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Neural Network Visualization',
      category: 'AI',
      status: 'completed',
      description: 'Interactive visualization of neural network architecture',
      tech: ['React', 'D3.js', 'TensorFlow.js'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Data Pipeline Automation',
      category: 'Automation',
      status: 'in-progress',
      description: 'Automated data processing and analysis pipeline',
      tech: ['Python', 'Apache Airflow', 'Docker'],
      demo: '#',
      github: '#'
    }
    // Add more projects
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter);

  return (
    <div className="page-container">
      <h1>Lab <span className="glow-text">Projects</span></h1>
      <div className="content-wrapper">
        <div className="project-filters">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI
          </button>
          <button 
            className={`filter-button ${filter === 'automation' ? 'active' : ''}`}
            onClick={() => setFilter('automation')}
          >
            Automation
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card"
              style={{
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
              }}
            >
              <div className="project-header">
                <span className={`status ${project.status}`}>{project.status}</span>
                <span className="category">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} className="demo-link">Live Demo</a>
                <a href={project.github} className="github-link">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects; 