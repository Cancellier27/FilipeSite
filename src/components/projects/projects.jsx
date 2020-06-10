import React from 'react'
import './projects.css'
import Card from './card'

import JogoDaVelha from '../../images/jogoDaVelha.PNG'

import descriptions from './cardData/descriptions.json'
import links from './cardData/links.json'

const Projects = () => (
  <main className="projectsContainer">
    <div className="titleProjects">
      <h2 className="textTileProjects">Here are some projects that I have made so far: </h2>
    </div>

    <div className="cardsPlace">
      <Card 
      ProjectImage={JogoDaVelha}
      ProjectName="Hash Game"
      ProjectDescription={descriptions.HashGameDescription}
      ProjectLink={links.hashGameLink}
      />

    </div>

  </main>
)

export default Projects