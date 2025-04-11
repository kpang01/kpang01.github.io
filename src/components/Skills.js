import React from 'react';
import '../styles/Skills.css'; // Ensure CSS is imported

const Skills = () => {
  // Skills from user's resume
  const technicalSkills = [
    { name: 'JavaScript', level: 70 },
    { name: 'Python', level: 85 },
    { name: 'React', level: 70 },
    { name: 'Java', level: 75 },
    { name: 'Node.js', level: 60 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'SQL (MySQL, PostgreSQL)', level: 80 },
    { name: 'AWS/Azure/GCP', level: 75 },
    { name: 'Docker/Kubernetes', level: 70 },
    { name: 'Flask/FastAPI', level: 60 },
    { name: 'Flutter', level: 75 },
    { name: 'Git/GitHub', level: 85 },
  ];

  const dataSkills = [
    { name: 'Large Language Models', level: 85 },
    { name: 'TensorFlow/PyTorch', level: 80 },
    { name: 'Scikit-learn', level: 70 },
    { name: 'Pandas/NumPy', level: 80 },
    { name: 'Hugging Face', level: 70 },
    { name: 'Power BI/Tableau', level: 70 },
    { name: 'NLTK/spaCy', level: 70 },
    { name: 'Azure', level: 70 },
    { name: 'Vector Databases', level: 75 },
  ];

  const softSkills = [
    'Problem-Solving',
    'Analytical Thinking',
    'Agile Methodology',
    'Cross-functional Collaboration',
    'Technical Documentation',
    'Multilingual (English, Chinese, Malay)'
  ];

  return (
    // Remove id, no longer needed
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Competencies</h2>

        <div className="skills-container">
          {/* Technical Skills Column */}
          <div className="technical-skills">
            <h3>Programming & Development</h3>
            <div className="skill-bars">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={`tech-${index}`}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    {/* <span className="skill-percentage">{skill.level}%</span> */}
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${skill.level}%` }}
                      title={`${skill.level}%`} // Add title for hover tooltip
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Data/AI and Soft Skills Column */}
          <div className="other-skills">
             <div className="data-ai-skills">
                <h3>Data Science & AI</h3>
                <div className="skill-bars">
                {dataSkills.map((skill, index) => (
                    <div className="skill-item" key={`data-${index}`}>
                    <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        {/* <span className="skill-percentage">{skill.level}%</span> */}
                    </div>
                    <div className="skill-bar">
                        <div
                        className="skill-level"
                        style={{ width: `${skill.level}%` }}
                        title={`${skill.level}%`}
                        ></div>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            <div className="soft-skills">
              <h3>Soft Skills</h3>
              <ul className="soft-skills-list">
                {softSkills.map((skill, index) => (
                  <li key={`soft-${index}`} className="soft-skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
