import React from 'react'
import './footer.scss'
import Button from '../ui/Button'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__content container container--pall container--no-py">
        <div className="footer__col1">
          <div className="footer__logo">
            LOGO HERE
          </div>
          <ul className="footer__socials">
            <li>
              <FaGithub className='socials__icon'/>
              </li>
            <li>
              <FaLinkedin className='socials__icon'/>
            </li>
          </ul>
        </div>

        <ul className="footer__links flex">
          <div className="link-1">
            <li className="footer__item">About</li>
            <li className="footer__item">Project</li>
            <li className="footer__item">Contact</li>
          </div>
          <div className="link-2">
            <li className="footer__item">Blog</li>
            <li className="footer__item">Reviews</li>
            <li className="footer__item">Resume</li>
          </div>
        </ul>

        <Button 
          text='Contact Me'
          className='footer__contactMe'
        />
      </div>
    </footer>
  )
}

export default Footer