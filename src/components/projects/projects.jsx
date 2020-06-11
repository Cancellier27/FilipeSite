import React from 'react'
import './projects.css'
import Card from './card'

import JogoDaVelha from '../../images/jogoDaVelha.PNG'
import Forca from '../../images/Forca.PNG'
import TimerReact from '../../images/timerReact.PNG'
import DoomFire from '../../images/DoomFire.PNG'
import EcoletaSite from '../../images/EcoletaSite.PNG'
import PersonalSite from '../../images/PersonalSite.png'

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
      <Card 
      ProjectImage={Forca}
      ProjectName="Forca"
      ProjectDescription={descriptions.ForcaDescription}
      ProjectLink={links.ForcaLink}
      />
      <Card 
      ProjectImage={TimerReact}
      ProjectName="Timer"
      ProjectDescription={descriptions.TimerDescription}
      ProjectLink={links.TimerLink}
      />
      <Card 
      ProjectImage={DoomFire}
      ProjectName="Doom Fire"
      ProjectDescription={descriptions.DoomFireDescription}
      ProjectLink={links.DoomFireLink}
      />
      <Card 
      ProjectImage={EcoletaSite}
      ProjectName="Ecoleta Site"
      ProjectDescription={descriptions.EcoletaSiteDescription}
      ProjectLink={links.EcoletaSiteLink}
      />
      <Card 
      ProjectImage={PersonalSite}
      ProjectName="This Site"
      ProjectDescription={descriptions.PersonalSiteDescription}
      ProjectLink={links.PersonalSiteLink}
      />
    </div>

  </main>
)

export default Projects