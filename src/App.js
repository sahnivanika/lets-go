import './App.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Navbar from './components/navBar';

function App() {
  return (
    <div className="App">
        {/*Navbar */}
      <Navbar />
      <div className="App_main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;


