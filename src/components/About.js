
import React from 'react';
import StackList from './StackList';
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaHtml5, FaCss3Alt, FaReact, FaGit, FaJira } from "react-icons/fa";
import { SiRabbitmq, SiSwagger, SiPostman } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const title = 'Full-Stack .NET and React web-developer';
const aboutMyself = 'Hi, my name is Kostiantyn Turkin. A passionate developer from Ukraine. ' + 
                        'My main stack is based on .NET infrastructure. ' +
                        'I\'m always trying to improve my soft and hard skills ' +
                        'so each new day I\'m a representation of best version of myself.';

const backEndStack = ['C#', 'MSSQL', 'PostgreSQL', 'Asp.net Core', 'EF Core', 'Dapper', 'Docker', 'RabbitMQ',
                    'NUnit', 'xUnit'];
const backEndStackIcons = [(<TbBrandCSharp className='stack-icon'/>), (<DiMsqlServer className='stack-icon'/>),
                    (<BiLogoPostgresql className='stack-icon'/>), 'Asp.net Core', 'EF Core', 'Dapper',
                    (<FaDocker className='stack-icon'/>), (<SiRabbitmq className='stack-icon'/>),
                    'NUnit', 'xUnit'];

const frontEndStack = ['html', 'css', 'JavaScript', 'React'];
const frontEndStackIcons = [(<FaHtml5 className='stack-icon'/>), (<FaCss3Alt className='stack-icon'/>),
                            (<IoLogoJavascript className='stack-icon'/>), (<FaReact className='stack-icon'/>)];

const commonTools = ['Swagger', 'Postman', 'Git', 'Jira'];
const commonToolsIcons = [(<SiSwagger className='stack-icon'/>), (<SiPostman className='stack-icon'/>),
                            (<FaGit className='stack-icon'/>), (<FaJira className='stack-icon'/>)]

export default function About({ categoryId }) {
    const category = categoryId.slice(1);

    return (
        <div className='container'>
            <div className='about section' id={category}>
                <div className='about-text'>
                    <h2>{title}</h2>
                    <p>{aboutMyself}</p>
                    <h4>Technology stack</h4>
                    <div className='tech-stack'>
                        <StackList techStack={backEndStack} techStackIcons={backEndStackIcons} />
                        <StackList techStack={frontEndStack} techStackIcons={frontEndStackIcons} />
                        <StackList techStack={commonTools} techStackIcons={commonToolsIcons} />
                    </div>
                </div>
            </div>
        </div>
    )
}