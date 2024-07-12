import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navBar';

function App() {
  const particlesInit = async (main) => {
    console.log(main); // This should log the main object
    await loadFull(main);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 5,
            },
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;



