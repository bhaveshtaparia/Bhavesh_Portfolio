import React from 'react';
function ProjectCard(props) {
  return (
    <div className="project-card">
      <img src={require(`../images/${props.image}`)}   alt="Project Thumbnail" />
      <div className="project-details">
        <h3>{props.title}</h3>
        <p>{props.description}...</p>
        <a href={`${props.link}`} target='_blank' rel="noreferrer" >Learn More</a>
      </div>
    </div>
  );
}

export default ProjectCard;
