import React from 'react';
import '../styles/Skills.css'; // Ensure CSS is imported

const Skills = () => {
  // Skills from user's resume
  const technicalSkills = [
    { name: 'JavaScript', level: 85 }, // Assign arbitrary levels for now
    { name: 'Java', level: 80 },
    { name: 'Python', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'SQL (MySQL, PostgreSQL)', level: 70 },
    { name: 'TensorFlow/Keras/PyTorch', level: 80 },
    { name: 'AWS/Azure/GCP', level: 75 },
    { name: 'Docker/Kubernetes', level: 70 },
    { name: 'Flask API', level: 70 },
    { name: 'Spring Framework', level: 65 },
    { name: 'Angular', level: 60 },
    { name: 'C', level: 60 },
    { name: 'Visual Basic', level: 50 },
  ];

  const dataSkills = [
    { name: 'LLMs', level: 80 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'Pandas/NumPy', level: 85 },
    { name: 'Power BI/Tableau', level: 75 },
  ];

  const softSkills = [
    'Teamwork',
    'Problem-Solving',
    'Analytical Thinking',
    'Agile Development',
    'Public Speaking',
    'Communication', // Added from summary
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
