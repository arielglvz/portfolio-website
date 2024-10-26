import React from 'react';
import './hero2.scss';
import Button from '../ui/Button';
import { heroImg } from '../../assets/images/hero';

const Hero2 = () => {
  return (
    <section className="hero">
      <div className="hero__content container container--pall">
        <div className="hero__text">
          <p className="hero__greeting">HELLO</p>
          <h1>I'm <span>Yeyel</span> a <span>Web Developer</span></h1>
          <p className="hero__introduction">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad ratione. 
            Blanditiis, facere fugit adipisci repellendus repudiandae quam nam molestias.
          </p>
          <div className="hero__buttons flex">
            <Button 
              className="portfolio button--border flex flex-jc-c flex-ai-c" 
              text='Portfolio' /
            >
            <Button 
              className="hire-me button--fill button--fill flex flex-jc-c flex-ai-c" 
              text='CV' 
            />
          </div>
        </div>
        {/* <div className="hero__image">
          <img src={heroImg} alt="hero image" />
        </div> */}
      </div>
    </section>
  )
}

export default Hero2