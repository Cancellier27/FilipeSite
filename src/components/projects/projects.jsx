/* eslint-disable linebreak-style */
import React from 'react';
import './projects.css';
import Card from './card/card';

import JogoDaVelha from '../../assets/images/jogoDaVelha.PNG';
import Forca from '../../assets/images/Forca.PNG';
import TimerReact from '../../assets/images/timerReact.PNG';
import DoomFire from '../../assets/images/DoomFire.PNG';
import EcoletaSite from '../../assets/images/EcoletaSite.PNG';
import PersonalSite from '../../assets/images/PersonalSite.png';
import GithubApp from '../../assets/images/githubApp.PNG';
import Fiflix from '../../assets/images/fiflix.png';

import descriptions from './cardData/descriptions.json';
import links from './cardData/links.json';
import PageDefault from '../../pageDefault';

const Projects = () => (
  <PageDefault>

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
        <Card
          ProjectImage={GithubApp}
          ProjectName="Git Search App"
          ProjectDescription={descriptions.GithubAppDescription}
          ProjectLink={links.GithubAppLink}
        />
        <Card
          ProjectImage={Fiflix}
          ProjectName="FIFLIX App"
          ProjectDescription={descriptions.FiflixAppDescription}
          ProjectLink={links.FiflixAppLink}
        />
      </div>

    </main>

  </PageDefault>

);

export default Projects;
