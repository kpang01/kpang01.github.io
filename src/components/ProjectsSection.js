function ProjectsSection() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application built with React and Node.js',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'Full-stack application with modern technologies',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'Mobile-responsive website with modern design',
      link: '#'
    }
  ];

  return (
    <section id="projects" style={{
      padding: '100px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontSize: '48px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        Featured <span style={{ color: '#61DAFB' }}>Projects</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
      }}>
        {projects.map((project) => (
          <div key={project.title} style={{
            backgroundColor: 'rgba(97, 218, 251, 0.1)',
            borderRadius: '20px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{ marginBottom: '15px' }}>{project.title}</h3>
            <p style={{ color: '#8F9BA8', marginBottom: '20px' }}>{project.description}</p>
            <a href={project.link} style={{
              color: '#61DAFB',
              textDecoration: 'none',
            }}>Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection; 