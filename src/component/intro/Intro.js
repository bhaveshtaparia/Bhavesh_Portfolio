// Intro.js
import React from 'react';
import Typewriter from 'typewriter-effect';
import './Intro.css'; // Import the CSS file

function Intro() {
  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1>Welcome to My Portfolio</h1>
        <Typewriter
  options={{
    strings: [
      "My name is Bhavesh.",
      "I am a coder.",
      "I am a full-stack developer.",
      "I'm excited to showcase my work and skills!"
    ],
    autoStart: true,
    loop: true,
  }}
/>

        <button className='aboutbtn'>
         <a href='#contact'>Get in touch</a></button>
      </div>
    </div>
  );
}

export default Intro;
