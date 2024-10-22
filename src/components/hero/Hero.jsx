import React from 'react';
import './hero.scss';
import Button from '../ui/Button';
import { heroImg } from '../../assets/images/hero';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container container--pt">
        <div className="hero__text container--pall">
          <p className="hero__greeting">HELLO</p>
          <h1>I'm <span>Yeyel</span> a <span>Web Developer</span></h1>
          <p className="hero__introduction">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad ratione. 
            Blanditiis, facere fugit adipisci repellendus repudiandae quam nam molestias.
          </p>
          <div className="hero__buttons flex">
            <Button 
              className="hire-me button--fill button--fill flex flex-jc-c flex-ai-c" 
              text='Hire me' 
            />
            <Button 
              className="portfolio button--border flex flex-jc-c flex-ai-c" 
              text='Portfolio' /
            >
          </div>
        </div>
        <div className="hero__image container--pall container--no-py">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </section>
  )
}

export default Hero