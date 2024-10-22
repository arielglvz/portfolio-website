import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className='title'>
      <h2 className='title__h2'>{title}</h2>
      <div>
        <p className='title__p'>{subtitle}</p>
      </div>
    </div>
  )
}

export default SectionTitle