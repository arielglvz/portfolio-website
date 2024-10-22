import React from 'react'
import './services.scss'
import SectionTitle from '../ui/SectionTitle'
import Card from './components/card/Card'

const Services = () => {
  return (
    <div className="services">
      <div className="container container--pall">
        <SectionTitle 
          title='Services' 
          subtitle='How Can I Help You With'
        />

        <div className="services__card-container">
          <div className="services__content container--px">
            <Card 
              title='Web Development'
              desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!'
            />
            <Card 
              title='Web Development'
              desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!'
            />
            <Card 
              title='Web Development'
              desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services