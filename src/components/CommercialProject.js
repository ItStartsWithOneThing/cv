
import React from 'react';
import StackList from './StackList';

export default function CommercialProject({ project }) {
  return (
    <div className='commercial_projects_container'>
        <div className='domain-duration'>
            <h4>Domain: {project.domain}</h4>
            <p>{project.duration}</p>
        </div>
        <div className='team-position'>
            <div>
                <h4>Team</h4>
                <p>{project.team}</p>
            </div>
            <div className='position'>
                <h4>Position</h4>
                <p>{project.position}</p>
            </div>
        </div>
        <div className='responsibilities'>
            <h4>Responsibilities</h4>
            <p>{project.responsibilities}</p>
        </div>
        <div className='commercial-stack'>
            <h4>Stack</h4>
            <StackList techStack={project.technologies} techStackIcons={project.technologiesIcons} />
        </div>
    </div>
  )
}
