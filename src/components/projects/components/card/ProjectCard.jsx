import React from 'react'
import './projectcard.scss'
import { testimage } from '../../../../assets/images/myproject'
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ title = 'Title' }) => {
  return (
    <div className="pcard">
      <img className="pcard__img" src={testimage} alt="test Img" />
      <div className="pcard__text">
        <div className="pcard__title">{title}</div>
        <p className="pcard__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nihil numquam libero nulla nisi sit nesciunt, perferendis suscipit mollitia fugit natus, neque voluptatum delectus quibusdam obcaecati illum non corrupti quasi?</p>
          <span className='pcard__link'>
            <a href="https://easybank-landing-page-seven-chi.vercel.app/" target="_blank">View Project</a>
            <MdArrowOutward className='pcard__icon'/>
          </span>
      </div>
    </div>
  )
}

export default ProjectCard