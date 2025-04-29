import React from 'react';
import './../assets/styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tech-stack">{project.technologies.join(', ')}</div>
      <div className="project-links">
        <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;