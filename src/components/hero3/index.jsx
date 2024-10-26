import React from 'react'
import './hero3.scss'
import { 
  fbImg, 
  // profileImg 
} from '../../assets/images/hero'
import { FaCamera } from "react-icons/fa";

const Hero3 = () => {
  const backgroundCoverImg = {
    backgroundImage: `url(${fbImg})`, // Notice the template literals here
  };

  return (
    <section className="hero3">
      <div 
        className="hero3__content container container--pall" 
        style={backgroundCoverImg}
      >
        {/* <div className="hero3__user-profile">
          <img src={profileImg} alt='profile img'/>
        </div> */}

        <div className="hero3__edit">
          <FaCamera />
          <p>Edit</p>
        </div>
      </div>
    </section>
  )
}

export default Hero3