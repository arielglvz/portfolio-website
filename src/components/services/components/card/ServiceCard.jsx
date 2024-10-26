import React from 'react';  
import './servicecard.scss';
import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="scard">
      <p className="scard__title">{title}</p>
      <p className="scard__desc">{desc}</p>
      <div className="scard__corner">
        <MdArrowOutward className='scard__icon'/>
      </div>
    </div>
  )
}

export default ServiceCard