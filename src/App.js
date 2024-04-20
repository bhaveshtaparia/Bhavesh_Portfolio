import React from 'react';
import './App.css';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Skill from './component/Skill';
import Achievement from './component/Achievement/Achievement';
import Intro from './component/intro/Intro';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#achievement">Achievement</a></li>
          </ul>
        </nav>
      </header>
    <Intro/>
      <section id="about" className="section">
        <About/>
      </section>
      <section id="project" className="section">
        <Project/>
      </section>
      <section id="skills" className="section">
        <Skill/>
      </section>
      <section id="achievement" className="section">
        <Achievement/>
      </section>
      <section id="contact" className="section">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
