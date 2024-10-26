import React from 'react'
import './header.scss'
import { GoHomeFill } from "react-icons/go";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

const Header = () => {
  const text = true;

  return (
    <div className="header">
      <nav className="header__content container container--px">
        <p className="header__brand">YEYEL DEV</p>

        <a id="btnHamBurger" href="#" className="header__toggle hide-for-desktop">
          <span></span>
          <span></span> 
          <span></span>
        </a>

        <ul className='header__links'>
          <li className="header__item">
            <GoHomeFill className='header__home'/>
            <span>HOME</span>
          </li>
          <li className="header__item">
            <SiAboutdotme className='header__about'/>
            <span>ABOUT</span>
          </li>
          <li className="header__item">
            <GrProjects className='header__project'/>
            <span>PROJECTS</span>
          </li>
          <li className="header__item">
            <MdContactMail className='header__contact'/>
            <span>CONTACT</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header