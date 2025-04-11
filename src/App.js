import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout & Page Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage'; // Home page (Hero + Sections)
import PersonalPage from './components/PersonalPage'; // New Personal page (Logbook, Internship, Uni)
import ContactPage from './components/ContactPage';
import LabsPage from './components/LabPage';
// Remove imports for components not used as distinct pages or now part of PersonalPage
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import LogbookPage from './components/LogbookPage';
// import UniversityPage from './components/UniversityPage';


// Import Global Styles
import './App.css';
import './styles/index.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar outside Routes */}

        {/* Define page routes */}
        <Routes>
          {/* Home route renders MainPage (Hero + Sections) */}
          <Route path="/" element={<MainPage />} />
          {/* Updated page routes */}
          <Route path="/personal" element={<PersonalPage />} /> {/* Changed from /logbook */}
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/labs" element={<LabsPage />} />
          {/* Removed /university route */}
          {/* Add other distinct page routes here if needed */}
        </Routes>

        <Footer /> {/* Footer outside Routes */}
      </div>
    </Router>
  );
}

export default App;
