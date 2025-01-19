import React, { useState } from 'react';

function Automation() {
  const [activeTab, setActiveTab] = useState('scripts');

  const automationTools = {
    scripts: [
      {
        name: 'Data Pipeline Automation',
        description: 'Automated ETL processes for data preprocessing',
        tech: ['Python', 'Apache Airflow', 'SQL'],
        status: 'active'
      },
      {
        name: 'Report Generator',
        description: 'Automated report generation from analysis results',
        tech: ['Python', 'Pandas', 'Matplotlib'],
        status: 'completed'
      },
      {
        name: 'Model Training Pipeline',
        description: 'Automated ML model training and validation',
        tech: ['TensorFlow', 'Docker', 'Jenkins'],
        status: 'in-progress'
      }
    ],
    workflows: [
      {
        name: 'Data Quality Check',
        schedule: 'Daily',
        steps: ['Validation', 'Cleaning', 'Reporting'],
        status: 'active'
      },
      {
        name: 'Model Retraining',
        schedule: 'Weekly',
        steps: ['Data Update', 'Training', 'Validation'],
        status: 'active'
      }
    ]
  };

  return (
    <div className="page-container">
      <h1>Automation <span className="glow-text">Lab</span></h1>
      <div className="content-wrapper">
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'scripts' ? 'active' : ''}`}
            onClick={() => setActiveTab('scripts')}
          >
            Scripts
          </button>
          <button 
            className={`tab-button ${activeTab === 'workflows' ? 'active' : ''}`}
            onClick={() => setActiveTab('workflows')}
          >
            Workflows
          </button>
        </div>

        <div className="automation-grid">
          {activeTab === 'scripts' ? (
            automationTools.scripts.map((script, index) => (
              <div 
                key={script.name}
                className="automation-card"
                style={{
                  animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
                }}
              >
                <div className={`status-indicator ${script.status}`} />
                <h3>{script.name}</h3>
                <p>{script.description}</p>
                <div className="tech-stack">
                  {script.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            automationTools.workflows.map((workflow, index) => (
              <div 
                key={workflow.name}
                className="workflow-card"
                style={{
                  animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
                }}
              >
                <h3>{workflow.name}</h3>
                <p className="schedule">Schedule: {workflow.schedule}</p>
                <div className="workflow-steps">
                  {workflow.steps.map((step, i) => (
                    <div key={step} className="step">
                      <span className="step-number">{i + 1}</span>
                      <span className="step-name">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Automation; 