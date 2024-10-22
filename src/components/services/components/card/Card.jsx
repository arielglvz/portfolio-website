import React from 'react';  
import './card.scss';

const Card = ({ title, desc }) => {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <p className="card__desc">{desc}</p>
      <div className="card__corner">
        <div className="card__arrow">→</div>
      </div>
    </div>
  )
}

export default Card