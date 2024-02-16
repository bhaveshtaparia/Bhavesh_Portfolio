import React from 'react';
import './Project.css'; // Import the CSS file for styling
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <div className="project-section">
      <h2>Projects</h2>
      <div className="project-container">
        <ProjectCard image='ecommerce.png' title='Comprehensive MERN Stack Ecommerce' description=
"A comprehensive MERN Stack Ecommerce platform offering seamless user personalization, streamlined shopping experience, enhanced community engagement, and robust admin functionalities for secure product and user management." link='https://github.com/bhaveshtaparia/Ecommerce'/>
        <ProjectCard image='problem.png' title='CollabSolve' description="CollabSolve Hub is a virtual platform fostering collaboration and problem-solving, featuring an innovative upvote system, competitive ranking, and a diverse tech stack including React.js, Node.js, and MongoDB." link='https://problemsolutions.netlify.app/'/>
        <ProjectCard image='meta.png' title='DrugEsc' description="DrugEsc is an interactive platform providing age-group categorized drug information, utilizing augmented reality for enhanced learning, and offering personalized counseling through one-to-one video calls." link='https://meta-virid.vercel.app/'/>
        <ProjectCard image='vgb.png' title='VGB' description="Developed an engaging web application utilizing React, aimed at sharing insights into web and app development. This platform offers valuable resources and coding examples for educational purposes, focusing on various Java applications." link='https://vgb.netlify.app/'/>
        {/* <ProjectCard/>
        <ProjectCard/> */}
      </div>
    </div>
  );
}

export default Project;
