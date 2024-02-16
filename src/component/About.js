import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="about-content">
      <div className="intro">
        <h2>About Me</h2>
        <p>Aspiring software engineer with a strong background in data structures, algorithms, and MERN stack development. Seeking opportunities to apply my problem-solving skills and technical proficiency in a dynamic and collaborative work environment to drive innovation and deliver user-focused solutions.</p>
      </div>
      <div className="education-section">
        <div className="box">
        <p>B.E. Branch- Computer Science and
                    Engineering
                    Chandigarh University, Mohali</p>
                <p>2021 - 2025, Current Cgpa 8.18</p>
        </div>
        <div className="box">
        <p>
                    12th Standard-
                    SH RGG SS ADARSH VM SR
                    SEC SCH,
                    SUJANGARH(CHURU)
                </p>
                <p>
                    Percentage- 86%
                </p>
        </div>
        <div className="box">
        <p>10th Standard-
                    Adarsh V M SEC SCH , CHHAPAR(CHURU)</p>
                <p>
                    Percentage-89.33
                </p>
        </div>
      </div>
    </div>
  );
}

export default About;
