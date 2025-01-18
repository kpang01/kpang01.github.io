function HeroSection() {
  return (
    <div style={{ maxWidth: '600px' }}>
      <div style={{
        backgroundColor: 'rgba(97, 218, 251, 0.1)',
        padding: '8px 16px',
        borderRadius: '20px',
        display: 'inline-block',
        marginBottom: '24px',
      }}>
        <span style={{ color: '#61DAFB' }}>👋 Welcome to my portfolio</span>
      </div>

      <h1 style={{
        fontSize: '72px',
        lineHeight: '1.1',
        marginBottom: '24px',
      }}>
        Hi, I'm
        <br />
        <span style={{ color: '#61DAFB' }}>Your Name</span>
        <br />
        Web Developer
      </h1>

      <p style={{
        color: '#8F9BA8',
        fontSize: '18px',
        lineHeight: '1.6',
        marginBottom: '40px',
        maxWidth: '500px'
      }}>
        A passionate full-stack developer specializing in building exceptional 
        digital experiences. Currently focused on building responsive web applications.
      </p>

      <div style={{
        display: 'flex',
        gap: '20px',
      }}>
        <a href="#contact" style={{
          backgroundColor: '#61DAFB',
          color: '#0A0B0F',
          padding: '12px 24px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}>
          Contact Me
        </a>
        <a href="#projects" style={{
          border: '1px solid #61DAFB',
          color: '#61DAFB',
          padding: '12px 24px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
        }}>
          View Projects
        </a>
      </div>
    </div>
  );
}

export default HeroSection; 