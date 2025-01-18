function FloatingSpheres() {
  return (
    <>
      {[1, 2, 3].map((index) => (
        <div key={`sphere-${index}`} style={{
          position: 'absolute',
          width: `${30 + index * 10}px`,
          height: `${30 + index * 10}px`,
          backgroundColor: '#61DAFB',
          borderRadius: '50%',
          top: `${20 + index * 30}%`,
          right: `${20 + index * 20}%`,
          opacity: '0.8',
          boxShadow: '0 0 30px rgba(97, 218, 251, 0.5)',
          animation: `float ${2 + index}s infinite ease-in-out`,
        }} />
      ))}
    </>
  );
}

export default FloatingSpheres; 