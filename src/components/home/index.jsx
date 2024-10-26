import React, { useState } from 'react'
import './home.scss'
import { FaGithub, FaLinkedinIn, FaGoogle  } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { profileImg } from '../../assets/images/hero'

const switchTabs = [
  { value: 0, name: 'Projects' },
  { value: 1, name: 'Default' },
  { value: 2, name: 'Blogs' },
];

const userInfoPosStyle =[
  { left: '75%' },
  { left: '50%' },
  { left: '25%'}
]

const Home = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };


  return (
    <section className="home">
      <div className="home__content container container--no-pt flex">
        
        <div className="home__jobs"></div>
        
        <div className="home__userinfo" style={userInfoPosStyle[selectedValue]}>
          <div className="home__user-profile">
            <img src={profileImg} alt='profile img'/>
          </div>
          <div className="home__userdiv">
            <div className="home__details">
              <h1>Ariel Galvez</h1>
              <p>Web Developer</p>
              <ul className="home__socials">
                <li className="home__soc-item flex-c-all home__github">
                  <FaGithub />
                </li>
                <li className="home__soc-item flex-c-all home__linkedin">
                  <FaLinkedinIn />
                </li>
                <li className="home__soc-item flex-c-all home__twitter">
                  <RiTwitterXFill />
                </li>
                <li className="home__soc-item flex-c-all home__google">
                  <FaGoogle />
                </li>
              </ul>

              <div className="home__buttons flex flex-jc-sa">
                <div className="home__btn btn1 flex-c-all">Portfolio</div>
                <div className="home__btn btn2 flex-c-all">Hire me</div>
              </div>
              
              <div className="home__radio-inputs">
              {switchTabs.map((item) => (
                <label key={item.value} className="home__radio">
                  <input
                    type="radio"
                    name="radio"
                    value={item.value}
                    checked={selectedValue === item.value}
                    onChange={() => handleRadioChange(item.value)}
                  />
                  <span className="home__radio-name">{item.name}</span>
                </label>
              ))}
              </div>
            </div>
          </div>
        </div>

        <div className="home__projects"></div>
      </div>
    </section>
  )
}

export default Home