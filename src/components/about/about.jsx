import React from 'react'
import './about.css'

import Filipe from '../../images/FilipeCancellier.png'

const About = () => (
  <main className="aboutPage">
    <div className="divAvatar">
      <img src={Filipe} alt="Filipe"  className="filipeAvatar"/>
    </div>

    <div className="textAbout">
      <p>My name is Filipe Cancellier da Costa.
         I was born in Urussanga, Brazil in 1992.
          I got graduated in Civil Engineering in 2017,
           and have worked as a civil engineer until 2020.<br /> <br />
           I discover the programing world in 2018 but just start study for web in 2019, and know....... </p>
    </div>
  </main>
)

export default About