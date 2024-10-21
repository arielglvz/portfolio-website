import React from 'react';

const Button = ({ text, className }) => {
  return (
    <div className={`button ${className}`}>{text}</div>
  )
}

export default Button