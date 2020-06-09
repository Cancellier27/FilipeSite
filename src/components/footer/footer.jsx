import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="date">
        <h3>09 - jun - 2020</h3>
      </div>
      
      <div className="socialMediaFooter">
        <h3>Find me:</h3>
        <ul className="navBarFooter">
          <li>
            <a href="/">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer