
import React from 'react';
import PetProject from './PetProject';
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5, FaCss3Alt, FaGit } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import PetProjectModal from './PetProjectModal';

export default function Pet({ categoryId }) {
  const petProjects = [{name: 'ToDo-List', icon: (<IoLogoGithub className='stack-icon'/>),
                        description: 'The purpose of this app is to hold all your notes in one place and make your UX super comfortable.',
                        technologies: ['C#', '.NET 8', 'Asp.net Core MVC', 'Swagger', 'EF Core',
                                      'PostgreSQL', 'html', 'css', 'JavaScript', 'Git'],
                        technologiesIcons: [
                          (<TbBrandCSharp className='stack-icon'/>), '.NET 8', 'Asp.net Core MVC',
                          (<SiSwagger className='stack-icon'/>), 'EF Core', (<BiLogoPostgresql className='stack-icon'/>),
                          (<FaHtml5 className='stack-icon'/>), (<FaCss3Alt className='stack-icon'/>),
                          (<IoLogoJavascript className='stack-icon'/>), (<FaGit className='stack-icon'/>)
                        ],
                        images: [
                          {src: '../media/img/todo1.jpg', alt: 'Main Page'},
                          {src: '../media/img/todo2.jpg', alt: 'Sign In'},
                          {src: '../media/img/todo3.jpg', alt: 'Add Card'},
                          {src: '../media/img/todo4.jpg', alt: 'Edit Card'}
                        ],
                        videos: [

                        ]
                       }
                      ];

  
  const [isModalOpened, setIsModalOpened] = React.useState(false);
  const [currentProjectIdx, setCurrentProjectIdx] = React.useState(0);

  const openModal = function (open, idx=0) {
    setIsModalOpened(open);
    setCurrentProjectIdx(idx);
  }

  const category = categoryId.slice(1);

  return (
    <div className='container'>
        <div className='pet section' id={category}>
          <h3>Pet <span>projects</span></h3>
          <div className='pet_projects'>
              {
                petProjects.map((proj, idx) => {
                  return (
                    <PetProject key={idx} project={proj} openModal={openModal} image={proj.images[0]}/>
                  )
                })
              }
          </div>
          <PetProjectModal isOpened={isModalOpened} openModal={openModal} petProjects={petProjects} projectIdx={currentProjectIdx} />
        </div>
    </div>
  )
}
