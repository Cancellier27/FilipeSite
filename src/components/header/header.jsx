/* eslint-disable linebreak-style */
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  function homeClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/' ? 'selectedHeader' : '';
  }
  function aboutClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/about' ? 'selectedHeader' : '';
  }
  function projectsClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/projects' ? 'selectedHeader' : '';
  }
  function contactClass() {
    const pagePath = window.location.pathname;
    return pagePath === '/contact' ? 'selectedHeader' : '';
  }

  return (
    <header>
      <div className="iconF">
        <span className="icon">
          <i className="fab fa-foursquare" />
        </span>
        <h1><Link to="/" className="filipe">FILIPE</Link></h1>
      </div>
      <ul className="navBar">
        <li>
          <Link to="/">Home</Link>
          <div className={homeClass()} />
        </li>
        <li>
          <Link to="/about">About</Link>
          <div className={aboutClass()} />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <div className={projectsClass()} />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <div className={contactClass()} />
        </li>
      </ul>

    </header>
  );
};

export default Header;
