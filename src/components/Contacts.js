
import React from 'react'
import { FaTelegram, FaLinkedin, FaSkype, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contacts({ categoryId }) {
  const category = categoryId.slice(1);

  return (
    <div className='container'>
        <div className='contacts section' id={category}>
            <h3>Contact <span>me</span></h3>
            <ul>
                <li><a href='https://t.me/kostya_oj' target='_blank'><FaTelegram /></a></li>
                <li><a href='https://www.linkedin.com/in/kturkin/' target='_blank'><FaLinkedin /></a></li>
                <li><a href='https://join.skype.com/invite/Mqqsnmok16On' target='_blank'><FaSkype /></a></li>
                <li><a href='https://github.com/ItStartsWithOneThing' target='_blank'><FaGithub /></a></li>
                <li><a href='https://www.instagram.com/kostya.turkin/' target='_blank'><FaInstagram /></a></li>
            </ul>
        </div>
    </div>
  )
}
