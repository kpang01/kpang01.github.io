import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm a developer passionate about creating amazing web experiences.
        </p>
        <div className="nav-links">
          <a
            className="App-link"
            href="https://github.com/kpang01"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="App-link"
            href="#projects"
            rel="noopener noreferrer"
          >
            Projects
          </a>
          <a
            className="App-link"
            href="#contact"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
