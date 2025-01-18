function FloatingCards() {
  return (
    <>
      {[0, 1, 2].map((index) => (
        <div key={index} style={{
          position: 'absolute',
          width: '400px',
          height: '250px',
          backgroundColor: 'rgba(97, 218, 251, 0.1)',
          borderRadius: '20px',
          top: '50%',
          right: '0',
          transform: `translateY(-50%) rotate(${-15 + index * 15}deg) translateX(${index * 20}px)`,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(97, 218, 251, 0.2)',
          boxShadow: '0 0 30px rgba(97, 218, 251, 0.1)',
        }} />
      ))}
    </>
  );
}

export default FloatingCards; 