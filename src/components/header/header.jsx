import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {

  function homeClass() {
    const pagePath = window.location.pathname
    console.log(window.location.origin)
    return pagePath === "/" ? "selectedHeader" : ""
  }
  function aboutClass() {
    const pagePath = window.location.pathname
    return pagePath === "/about" ? "selectedHeader" : ""
  }
  function projectsClass() {
    const pagePath = window.location.pathname
    return pagePath === "/projects" ? "selectedHeader" : ""
  }
  function contactClass() {
    const pagePath = window.location.pathname
    return pagePath === "/contact" ? "selectedHeader" : ""
  }


  return (
    <header>
      <div className="iconF">
        <span className="icon">
          <i className="fab fa-foursquare"></i>
        </span>
        <h1><a href="/" className="filipe">FILIPE</a></h1>
      </div>


      <ul className="navBar">
        <li>
          <a href="/">Home</a>
          <div className={homeClass()}></div>
        </li>
        <li>
          <a href={`${window.location.origin}/about`} >About</a>
          <div className={aboutClass()}></div>
        </li>
        <li>
          <a href={`${window.location.origin}/projects`} >Projects</a>
          <div className={projectsClass()}></div>
        </li>
        <li>
          <a href={`${window.location.origin}/contact`}>Contact</a>
          <div className={contactClass()}></div>
        </li>
      </ul>

    </header>
  )
}

export default Header