import React from 'react'
import './card.css'

const Card = ({ProjectName,  ProjectLink, ProjectDescription, ProjectImage}) => (
  <div className="mainCard">
    <div className="theCard">
      <div className="card-front">
        <img src={ProjectImage} alt={ProjectName} />
        <h1 className="cardFooter">{ProjectName}</h1>
      </div>
      <div className="card-back">
        <p className="projectDescription">{ProjectDescription}</p>
        <div>
          <a href={ProjectLink} className="linkToGitHubProject">Link</a>
        </div>
      </div>
    </div>
  </div>
)

export default Card
