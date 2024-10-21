import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <header className='header'>
      <nav className="container container--pall flex flex-jc-sb flex-ai-c">
        <div className="header__brand">
          Brand Here
        </div>

        <a id="btnHamBurger" href="#" class="header__toggle hide-for-desktop">
          <span></span>
          <span></span> 
          <span></span>
        </a>

        <ul className="header__links">
          <li className="header__item">About</li>
          <li className="header__item">Projects</li>
          <li className="header__item">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar