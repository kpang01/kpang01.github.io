import React, { useState, useEffect } from 'react';
import '../styles/LabPage.css';

const LabPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "AI-Powered Ticket Classification",
      category: "ai",
      image: "/images/ticket-classification.jpg",
      description: "Developed an AI model that automatically classifies and routes support tickets using NLP techniques, improving response time by 40%.",
      skills: ["Python", "NLP", "TensorFlow", "Classification Algorithms"],
      link: "#",
      featured: true,
      github: "https://github.com/yourusername/ticket-classification"
    },
    {
      id: 2,
      title: "WIP Tracking Dashboard",
      category: "automation",
      image: "/images/wip-dashboard.jpg",
      description: "Built a real-time dashboard to track work-in-progress items across manufacturing processes, providing visibility to stakeholders.",
      skills: ["JavaScript", "React", "Data Visualization", "Real-time Analytics"],
      link: "#",
      github: "https://github.com/yourusername/wip-dashboard"
    },
    {
      id: 3,
      title: "Speech Emotion Recognition System",
      category: "ai",
      image: "/images/speech-emotion.jpg", 
      description: "Created a mobile application that recognizes emotions from speech using CNN models, achieving 91% accuracy in real-world testing.",
      skills: ["Flutter", "Python", "TensorFlow", "Audio Processing"],
      link: "#",
      featured: true,
      github: "https://github.com/yourusername/speech-emotion"
    },
    {
      id: 4,
      title: "Automated Report Generator",
      category: "automation",
      image: "/images/report-generator.jpg",
      description: "Designed a system that automatically generates business reports by pulling data from multiple sources, saving 15 hours per week.",
      skills: ["Python", "Data Integration", "Templating", "Scheduling"],
      link: "#",
      github: "https://github.com/yourusername/report-generator"
    },
    {
      id: 5,
      title: "Customer Churn Prediction Model",
      category: "project",
      image: "/images/churn-prediction.jpg",
      description: "Developed a machine learning model to predict customer churn with 85% accuracy, enabling proactive customer retention strategies.",
      skills: ["Python", "Scikit-learn", "Feature Engineering", "Model Deployment"],
      link: "#",
      github: "https://github.com/yourusername/churn-prediction"
    },
    {
      id: 6,
      title: "Process Optimization Algorithm",
      category: "project",
      image: "/images/process-optimization.jpg",
      description: "Created an algorithm that optimizes manufacturing processes using historical data, resulting in 12% reduction in production time.",
      skills: ["Python", "Optimization Algorithms", "Statistical Analysis", "Industry 4.0"],
      link: "#",
      github: "https://github.com/yourusername/process-optimization"
    },
    {
      id: 7,
      title: "Computer Vision Quality Control",
      category: "ai",
      image: "/images/computer-vision.jpg",
      description: "Implemented a computer vision system that automatically detects product defects with 95% accuracy, reducing manual inspection needs.",
      skills: ["Computer Vision", "PyTorch", "Deep Learning", "OpenCV"],
      link: "#",
      featured: true,
      github: "https://github.com/yourusername/cv-quality-control"
    },
    {
      id: 8,
      title: "Data Pipeline Automation",
      category: "automation",
      image: "/images/data-pipeline.jpg",
      description: "Built an automated ETL pipeline that processes manufacturing data, cleans it, and loads it into visualization dashboards.",
      skills: ["Airflow", "SQL", "Docker", "Python"],
      link: "#",
      github: "https://github.com/yourusername/data-pipeline"
    },
    {
      id: 9,
      title: "Predictive Maintenance System",
      category: "project",
      image: "/images/predictive-maintenance.jpg",
      description: "Developed a system that predicts equipment failures before they occur, reducing unplanned downtime by 30%.",
      skills: ["Machine Learning", "IoT", "Time Series Analysis", "Reliability Engineering"],
      link: "#",
      github: "https://github.com/yourusername/predictive-maintenance"
    }
  ];

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  // Filter projects based on category and search term
  const filteredProjects = projects
    .filter(project => activeCategory === 'all' || project.category === activeCategory)
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Project count by category
  const projectCounts = {
    all: projects.length,
    ai: projects.filter(p => p.category === 'ai').length,
    automation: projects.filter(p => p.category === 'automation').length,
    project: projects.filter(p => p.category === 'project').length
  };

  return (
    <section id="lab" className="lab-section">
      <div className="container">
        <h2 className="section-title">Data Science Lab</h2>
        <p className="section-description">
          Explore my data science projects spanning artificial intelligence, automation, and analytics
        </p>
        
        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className={`featured-projects ${isScrolled ? 'reveal' : ''}`}>
            <h3 className="featured-title">Featured Projects</h3>
            <div className="featured-grid">
              {featuredProjects.map(project => (
                <div key={project.id} className="featured-card">
                  <div className="featured-image">
                    <img src={project.image} alt={project.title} />
                    <div className="featured-overlay">
                      <div className="featured-category">{project.category}</div>
                      <a href={project.link} className="featured-link" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="featured-content">
                    <h3 className="featured-project-title">{project.title}</h3>
                    <p className="featured-description">{project.description}</p>
                    <div className="project-skills">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Search and Filter Section */}
        <div className="search-filter-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects by name, description or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-search" onClick={() => setSearchTerm('')}>×</button>
            )}
          </div>
          
          <div className="category-filter">
            <button 
              className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Projects <span className="count">{projectCounts.all}</span>
            </button>
            <button 
              className={`filter-button ${activeCategory === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ai')}
            >
              Artificial Intelligence <span className="count">{projectCounts.ai}</span>
            </button>
            <button 
              className={`filter-button ${activeCategory === 'automation' ? 'active' : ''}`}
              onClick={() => setActiveCategory('automation')}
            >
              Automation <span className="count">{projectCounts.automation}</span>
            </button>
            <button 
              className={`filter-button ${activeCategory === 'project' ? 'active' : ''}`}
              onClick={() => setActiveCategory('project')}
            >
              Data Projects <span className="count">{projectCounts.project}</span>
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🔗</span> Demo
                    </a>
                    {project.github && (
                      <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                        <span className="link-icon">💻</span> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No projects found matching your search criteria.</p>
            <button className="reset-button" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
              Reset Filters
            </button>
          </div>
        )}
        
        <div className="lab-cta">
          <h3>Interested in Collaboration?</h3>
          <p>I'm always open to discussing new data science projects or research opportunities.</p>
          <a href="/contacts" className="cta-button">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default LabPage; 