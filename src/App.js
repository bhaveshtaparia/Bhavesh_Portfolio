import React from 'react';
import './App.css';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Skill from './component/Skill';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bhavesh Taparia</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://leetcode.com/Bhavesh_T/">Leetcode</a></li>
            <li><a href="https://www.codechef.com/users/cu_21bcs11461">Codechef</a></li>
            <li><a href="https://codeforces.com/profile/Bhavesh_T">Codeforces</a></li>
            <li><a href="https://github.com/bhaveshtaparia">Github</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="section">
        <About/>
      </section>
      <section id="project" className="section">
        <Project/>
      </section>
      <section id="skills" className="section">
        <Skill/>
      </section>
      <section id="contact" className="section">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
