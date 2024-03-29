
import React from 'react'
import StackList from './StackList';

export default function PetProject({ project, openModal }) {
  const [activeButton, setActiveButton] = React.useState('Photo');

  return (
    <div className='pet_projects_container'>
        <div className='pet_project-description'>
            <h2>
                <a href='https://github.com/ItStartsWithOneThing/ToDo-List/tree/dev' target='_blank' >
                    {project.name} <span>{project.icon}</span>
                </a>
            </h2>
            <div>
                <h4>Description</h4>
                <p>{project.description}</p>
            </div>
            <div className='pet-stack'>
                <h4>Stack</h4>
                <StackList techStack={project.technologies} techStackIcons={project.technologiesIcons} />
            </div>
        </div>
        <div className='pet_project-media'>
            <div className='pet_project-media_nav'>
                <h3>Demo</h3>
                <p className={`pet_project-media_nav-photo ${activeButton === 'Photo' ? 'active' : ''}`} 
                onClick={() => setActiveButton('Photo')}>
                    Photo
                </p>
                <p className={`pet_project-media_nav-video ${activeButton === 'Video' ? 'active' : ''}`} 
                onClick={() => setActiveButton('Video')}>
                    Video
                </p>
            </div>
            {
                activeButton === 'Photo' ? (
                    <div className={`pet_project-media_img`}>
                        <img src='../media/img/todo1.jpg' alt='Main Page' title='ToDo-List Main Page' width={'500px'}
                        onClick={() => openModal(true)}></img>
                    </div>
                ) : (
                    <div className={`pet_project-media_video`}>
                        <video controls width='500' >
                            <source src='../media/video/todo-list-record.mp4' type='video/mp4' />
                            <source src='../media/video/todo-list.mp4' type='video/mp4' />
                            <source src='../media/video/todo-list.webm' type='video/webm'  />
                        </video>
                    </div>
                )
            }
        </div>
    </div>
  )
}
