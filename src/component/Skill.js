import React from 'react';
import './Skill.css'; // Import the CSS file

export default function Skill() {
  return (
    <>
        <h2>Skills</h2>
    <div className="skill-container">
      <div className="category">
        <h3>Programming Languages</h3>
        <ul>
          <li>C++ (Proficient)</li>
          <li>JavaScript (Intermediate)</li>
          <li>Python (Beginner)</li>
          <li>Java (Beginner)</li>
        </ul>
      </div>

      <div className="category">
        <h3>Database and Language</h3>
        <ul>
          <li>MongoDB</li>
          <li>MySQL </li>
          <li>SQL (Intermediate)</li>
        </ul>
      </div>

      <div className="category">
        <h3>Frameworks</h3>
        <ul>
          <li>React JS </li>
          <li>Express JS </li>
          <li>Node JS </li>
          <li>Bootstrap </li>
        </ul>
      </div>

      <div className="category">
        <h3>Version Control Tools and IDE</h3>
        <ul>
          <li>Git</li>
          <li>Github</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>

      <div className="category">
        <h3>Course Work</h3>
        <ul>
          <li>Database and Management System (DBMS)</li>
          <li>Object-Oriented Programming</li>
          <li>Software Development</li>
          <li>Computer Networks</li>
          <li>Operating Systems</li>
          <li>Data Structures and Algorithms</li>
        </ul>
      </div>

      <div className="category">
        <h3>Soft Skills</h3>
        <ul>
          <li>Collaboration</li>
          <li>Communication</li>
          <li>Analytical</li>
          <li>Teamwork</li>
          <li>Time Management</li>
          <li>Leadership</li>
        </ul>
      </div>
    </div>
    </>
  );
}
