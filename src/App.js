import './styles/globals.css';

function App() {
  return (
    <div style={{
      backgroundColor: '#0A0B0F',
      backgroundImage: 'radial-gradient(circle at 50% 0%, #1A1B23 0%, #0A0B0F 50%)',
      color: '#FFFFFF',
      minHeight: '100vh',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(97, 218, 251, 0.1) 0%, transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite',
        zIndex: 1,
      }} />

      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        animation: 'fadeInDown 1s ease-out',
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
            animation: 'glow 2s ease-in-out infinite',
          }}>KP</span>
          Portfolio
        </div>
        <div style={{
          display: 'flex',
          gap: '40px',
        }}>
          {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              style={{ 
                color: '#FFFFFF', 
                textDecoration: 'none',
                position: 'relative',
                animation: `fadeInDown 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
              onMouseEnter={e => {
                e.target.style.color = '#61DAFB';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#FFFFFF';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <main style={{
        maxWidth: '1400px',
        margin: '60px auto',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 16px',
            borderRadius: '10px',
            display: 'inline-block',
            marginBottom: '24px',
            backdropFilter: 'blur(5px)',
            animation: 'fadeInUp 0.5s ease-out',
          }}>
            <span style={{ color: '#FFFFFF' }}>
              <span style={{ 
                color: '#61DAFB',
                animation: 'pulse 2s infinite',
              }}>⚡ </span>
              Full Stack Developer
            </span>
          </div>

          <h1 style={{
            fontSize: '72px',
            lineHeight: '1.1',
            marginBottom: '24px',
            fontWeight: 'bold',
            opacity: 0,
            animation: 'fadeInUp 0.5s ease-out forwards',
            animationDelay: '0.2s',
          }}>
            The Next
            <br />
            <span style={{ 
              color: '#61DAFB',
              display: 'inline-block',
              animation: 'glow 3s ease-in-out infinite',
            }}>Generation</span>
            <br />
            Developer.
          </h1>

          <p style={{
            color: '#8F9BA8',
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '500px',
            opacity: 0,
            animation: 'fadeInUp 0.5s ease-out forwards',
            animationDelay: '0.4s',
          }}>
            Passionate about creating innovative web solutions and 
            transforming ideas into reality through clean, efficient code 
            and modern technologies.
          </p>

          <div style={{
            width: '140px',
            height: '140px',
            border: '1px solid #61DAFB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            opacity: 0,
            animation: 'fadeInUp 0.5s ease-out forwards',
            animationDelay: '0.6s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(97, 218, 251, 0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              color: '#61DAFB',
              textAlign: 'center',
              fontSize: '18px',
            }}>
              Let's
              <br />
              Connect
              <span style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                transition: 'transform 0.3s ease',
              }}>→</span>
            </div>
          </div>
        </div>

        <div style={{
          position: 'relative',
          width: '600px',
          height: '600px',
          animation: 'fadeIn 1s ease-out',
        }}>
          {[0, 1, 2].map((index) => (
            <div 
              key={index} 
              style={{
                position: 'absolute',
                width: '400px',
                height: '250px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                top: '50%',
                right: '0',
                transform: `translateY(-50%) rotate(${-15 + index * 15}deg) translateX(${index * 20}px)`,
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 0 30px rgba(97, 218, 251, 0.1)',
                transition: 'all 0.3s ease',
                animation: `fadeIn 0.5s ease-out forwards ${0.2 * (index + 1)}s`,
                opacity: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = `translateY(-52%) rotate(${-15 + index * 15}deg) translateX(${index * 20}px) scale(1.05)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = `translateY(-50%) rotate(${-15 + index * 15}deg) translateX(${index * 20}px) scale(1)`;
              }}
            >
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#61DAFB', marginBottom: '10px' }}>Project {index + 1}</h3>
                <p style={{ color: '#8F9BA8' }}>Web Development • React • Node.js</p>
              </div>
            </div>
          ))}

          {[1, 2, 3].map((index) => (
            <div 
              key={`sphere-${index}`} 
              style={{
                position: 'absolute',
                width: `${40 + index * 20}px`,
                height: `${40 + index * 20}px`,
                backgroundColor: '#61DAFB',
                borderRadius: '50%',
                top: `${20 + index * 30}%`,
                right: `${20 + index * 20}%`,
                opacity: 0,
                boxShadow: '0 0 30px rgba(97, 218, 251, 0.5)',
                animation: `
                  float ${2 + index}s infinite ease-in-out,
                  fadeIn 0.5s ease-out forwards ${0.4 + index * 0.2}s
                `,
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
