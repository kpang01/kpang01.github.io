function SkillsSection() {
  const skills = [
    { name: 'Frontend', items: ['React', 'JavaScript', 'HTML/CSS'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'Databases'] },
    { name: 'Tools', items: ['Git', 'Docker', 'AWS'] }
  ];

  return (
    <section id="skills" style={{
      padding: '100px 40px',
      maxWidth: '1400px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontSize: '48px',
        marginBottom: '40px',
        textAlign: 'center',
      }}>
        My <span style={{ color: '#61DAFB' }}>Skills</span>
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '30px',
      }}>
        {skills.map((category) => (
          <div key={category.name} style={{
            backgroundColor: 'rgba(97, 218, 251, 0.1)',
            borderRadius: '20px',
            padding: '30px',
            backdropFilter: 'blur(10px)',
          }}>
            <h3 style={{
              color: '#61DAFB',
              marginBottom: '20px',
            }}>{category.name}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {category.items.map((item) => (
                <li key={item} style={{
                  color: '#8F9BA8',
                  marginBottom: '10px',
                }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection; 