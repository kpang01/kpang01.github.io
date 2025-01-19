import React from 'react';

function GitHub() {
  const githubStats = {
    repositories: 15,
    contributions: 423,
    stars: 28,
    followers: 45
  };

  const featuredRepos = [
    {
      name: 'ML-Projects',
      description: 'Collection of machine learning projects and experiments',
      language: 'Python',
      stars: 12,
      forks: 5
    },
    {
      name: 'Data-Visualization-Dashboard',
      description: 'Interactive dashboard for data analysis',
      language: 'JavaScript',
      stars: 8,
      forks: 3
    },
    {
      name: 'AutoML-Pipeline',
      description: 'Automated machine learning pipeline',
      language: 'Python',
      stars: 15,
      forks: 7
    }
  ];

  return (
    <div className="page-container">
      <h1>GitHub <span className="glow-text">Profile</span></h1>
      <div className="content-wrapper">
        <div className="github-stats">
          {Object.entries(githubStats).map(([key, value], index) => (
            <div 
              key={key}
              className="stat-card"
              style={{
                animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
              }}
            >
              <span className="stat-value">{value}</span>
              <span className="stat-label">{key}</span>
            </div>
          ))}
        </div>

        <div className="repos-section">
          <h2>Featured Repositories</h2>
          <div className="repos-grid">
            {featuredRepos.map((repo, index) => (
              <div 
                key={repo.name}
                className="repo-card"
                style={{
                  animation: `fadeInUp ${0.3 + index * 0.1}s ease-out`
                }}
              >
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-footer">
                  <span className="language">
                    <span className={`language-dot ${repo.language.toLowerCase()}`}></span>
                    {repo.language}
                  </span>
                  <span className="stars">⭐ {repo.stars}</span>
                  <span className="forks">🔱 {repo.forks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHub; 