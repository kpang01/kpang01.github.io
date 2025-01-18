function Navigation() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      <div style={{ 
        fontSize: '24px', 
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          color: '#61DAFB',
          fontSize: '28px',
        }}>KP</span>
        Developer
      </div>
      <div style={{
        display: 'flex',
        gap: '40px',
      }}>
        <a href="#about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</a>
        <a href="#skills" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Skills</a>
        <a href="#projects" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navigation; 