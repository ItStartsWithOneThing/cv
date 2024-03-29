
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
                        technologiesIcons: [(<TbBrandCSharp className='stack-icon'/>), '.NET 8', 'Asp.net Core MVC',
                        (<SiSwagger className='stack-icon'/>), 'EF Core', (<BiLogoPostgresql className='stack-icon'/>),
                        (<FaHtml5 className='stack-icon'/>), (<FaCss3Alt className='stack-icon'/>),
                        (<IoLogoJavascript className='stack-icon'/>), (<FaGit className='stack-icon'/>)]
                       }
                      ];

  
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  const openModal = function (open) {
    if(open){
      document.body.classList.add('modal-open');
    }
    else{
      document.body.classList.remove('modal-open');
    }
    setIsModalOpened(open);
  }

  const category = categoryId.slice(1);

  return (
    <div className='container'>
        <div className='pet section' id={category}>
          <h3>Pet <span>projects</span></h3>
          <div className='pet_projects'>
              {
                petProjects.map((proj) => {
                  return (
                    <PetProject project={proj} openModal={openModal} />
                  )
                })
              }
          </div>
          <PetProjectModal isOpened={isModalOpened} openModal={openModal} />
        </div>
    </div>
  )
}
