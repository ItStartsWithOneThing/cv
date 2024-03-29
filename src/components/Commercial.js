
import React from 'react';
import CommercialProject from './CommercialProject';
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaGit, FaJira } from "react-icons/fa";
import { SiRabbitmq, SiSwagger, SiPostman } from "react-icons/si";

export default function Commercial({categoryId}) {
  const andersenProjects = [{
                              domain: 'Internet Booking', duration: '08.2023 - 12.2023', team: '28 specialists',
                              position: '.NET developer', responsibilities: 'Migration from MSSQL Server to PostgreSQL',
                              technologies: ['C#', '.NET Framework 4.7', '.NET 7', 'Web-Forms', 'ADO.Net', 'Dapper',
                                'PostgreSQL', 'MSSQL', 'Docker', 'GitLab', 'Jira'
                                ],
                              technologiesIcons: [(<TbBrandCSharp className='stack-icon'/>), '.NET Framework 4.7', '.NET 7',
                                'Web-Forms', 'ADO.Net', 'Dapper', (<BiLogoPostgresql className='stack-icon'/>),
                                (<DiMsqlServer className='stack-icon'/>), (<FaDocker className='stack-icon'/>),
                                (<FaGit className='stack-icon'/>), (<FaJira className='stack-icon'/>)]
                            },
                            {
                              domain: 'Internet Banking', duration: '12.2022 - 08.2023', team: '15 specialists',
                              position: '.NET developer', responsibilities: 'Maintaining the system, developing new features, bugs fixing',
                              technologies: ['C#', '.NET 7', 'EF Core', 'Dapper', 'PostgreSQL', 'Docker',
                                'RabbitMQ', 'xUnit', 'Swagger', 'Postman', 'GitLab', 'Jira'
                                ],
                              technologiesIcons: [(<TbBrandCSharp className='stack-icon'/>), '.NET 7', 'EF Core', 'Dapper',
                                (<BiLogoPostgresql className='stack-icon'/>), (<FaDocker className='stack-icon'/>),
                                (<SiRabbitmq className='stack-icon'/>), 'xUnit', (<SiSwagger className='stack-icon'/>),
                                (<SiPostman className='stack-icon'/>),
                                (<FaGit className='stack-icon'/>), (<FaJira className='stack-icon'/>)]
                            },
                          ]

  const category = categoryId.slice(1);

  return (
    <div className='container'>
        <div className='commercial section' id={category}>
            <h3><span>One year</span> of commercial experience in such companies :</h3>
            <h2>
                <a href='https://www.linkedin.com/company/andersen-softwaredev/' target='_blank'>
                    Andersen Lab
                </a>
            </h2>
            <div className='commercial_projects'>
              {
                andersenProjects.map((proj) => {
                  return (
                    <CommercialProject project={proj} />
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}
