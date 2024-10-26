import React from 'react';

const Button = ({ text, className }) => {
  return (
    <div className={`button ${className}`}>
      <p>{text}</p>
    </div>
  )
}

export default Button