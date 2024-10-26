import React from 'react'
import './services.scss'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from './components/card/ServiceCard'

const Services = () => {
  return (
    <div className="services">
      <div className="container container--pall container--no-pt">
        <SectionTitle 
          title='Services' 
          subtitle='How Can I Help You With'
        />

        <div className="services__card-container">
          <div className="services__content container--px">
            <ServiceCard 
              title='Web Development'
              desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!'
            />
            <ServiceCard 
              title='Web Development'
              desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!'
            />
            <ServiceCard 
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