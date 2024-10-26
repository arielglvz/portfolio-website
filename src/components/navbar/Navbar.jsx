import React from 'react';
import './navbar.scss';
import Button from '../ui/Button';

const Navbar = ({ brand = 'Brand Here' }) => {
  return (
    <header className='header'>
      <nav className="container container--px flex flex-jc-sb flex-ai-c">
        <div className="header__brand">
          {brand}
        </div>

        <a id="btnHamBurger" href="#" className="header__toggle hide-for-desktop">
          <span></span>
          <span></span> 
          <span></span>
        </a>

        <ul className="header__links">
          <li className="header__item">Home</li>
          <li className="header__item">About</li>
          <li className="header__item">Projects</li>
          <Button 
              className="portfolio button--border flex flex-jc-c flex-ai-c" 
              text='Contact'
          />
        </ul>
      </nav>
    </header>
  )
}

export default Navbar