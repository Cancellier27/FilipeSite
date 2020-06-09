import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="iconF">
        <span className="icon">
          <i className="fab fa-foursquare"></i>
        </span>
        <h1 className="filipe">FILIPE</h1>
      </div>


      <ul className="navBar">
        <li>
          <a href="/">Home</a>
          <div className="selectedHeader"></div>
        </li>
        <li>
          <a href="/">About</a>
          <div></div>
        </li>
        <li>
          <a href="/">Projects</a>
          <div></div>
        </li>
        <li>
          <a href="/">Contact</a>
          <div></div>
        </li>
      </ul>

    </header>
  )
}

export default Header