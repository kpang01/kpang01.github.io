import React from 'react';
import '../styles/Projects.css'; // Ensure CSS is imported

const Projects = () => {
  // Combine Professional Experience and Projects/Events
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Ticket Management (Intel)',
      description: 'Developed AI-driven ticket management solutions using Large Language Models (LLMs) during internship. Designed and implemented ML algorithms for classification/automation, optimized models, and collaborated on integration.',
      technologies: ['Python', 'LLMs', 'Machine Learning', 'Cloud Deployment'], // Example techs
      image: 'placeholder.jpg', // Placeholder
      // liveLink: '#', // Add links if available
      // codeLink: '#'
    },
    {
      id: 2,
      title: 'Real-time Tracking Dashboard Developer (Intel)',
      description: 'Developed a real-time WIP tracking dashboard. Implemented data visualization and analytics using HTML, CSS, JavaScript, and Bootstrap. Integrated CSV data processing and real-time updates.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Data Visualization'],
      image: 'placeholder.jpg',
      // liveLink: '#',
      // codeLink: '#'
    },
    
    {
      id: 4,
      title: 'Real-Time Speech Emotion Recognition (FYP)',
      description: 'Developed a Flutter mobile app recognizing emotions from speech using CNN models (TensorFlow/Keras) via Flask API. Achieved 91% accuracy.',
      technologies: ['Flutter', 'Python', 'TensorFlow', 'Keras', 'Flask API', 'Deep Learning'],
      image: 'placeholder.jpg',
      // liveLink: '#',
      // codeLink: '#'
    },
    {
      id: 6,
      title: 'Library Management System (Java)',
      description: 'Developed a Java-based GUI system for book management using Swing. Implemented check-in/check-out functionality.',
      technologies: ['Java', 'Swing', 'GUI'],
      image: 'placeholder.jpg',
      // liveLink: '#',
      // codeLink: '#'
    },
    {
      id: 7,
      title: 'Cybersecurity Awareness Event Presenter',
      description: 'Presented Final Year Project (Speech Emotion Recognition) at a university cybersecurity event, explaining concepts and demonstrating AI model functionality.',
      technologies: ['Public Speaking', 'Technical Communication', 'AI Presentation'],
      image: 'placeholder.jpg',
      // liveLink: '#',
      // codeLink: '#'
    }
  ];

  return (
    // Remove id, no longer needed
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Experience & Projects</h2>
        {/* Optional: Add section description if desired */}
        {/* <p className="section-description">...</p> */}

        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="image-placeholder">
                  {/* Replace with actual image if available */}
                  <span>{project.title}</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && <a href={project.liveLink} className="button-secondary" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  {project.codeLink && <a href={project.codeLink} className="button-secondary" target="_blank" rel="noopener noreferrer">View Code</a>}
                   {/* Use button-secondary for links */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
