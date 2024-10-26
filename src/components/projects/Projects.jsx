import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import './projects.scss'
import ProjectCard from './components/card/ProjectCard'

const Projects = () => {
  return (
    <section className='project'>
      <div className="container container--pall container--no-pt">
        <SectionTitle 
          title='Projects'
          subtitle='My Portfolio'
        />
        <div className="project__card-container">
          <div className="project__content container--px">
            <ProjectCard
              title = 'EasyBank Landing Page'
            />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects