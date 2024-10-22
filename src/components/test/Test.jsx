import React from 'react'
import './test.scss'
import { heroImg } from '../../assets/images/hero';

const Test = () => {
  return (
    <div className="test container">
      <div className="test__div1"></div>
      <img className="test__div2" src={heroImg} alt="hero image" />
    </div>
  )
}

export default Test