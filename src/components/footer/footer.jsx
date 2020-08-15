/* eslint-disable linebreak-style */
import React from 'react';
import './footer.css';

const Footer = () => {
  const dayDate = new Date();

  return (
    <footer>
      <div className="date">
        <h3>{dayDate.toDateString()}</h3>
      </div>

      <div className="socialMediaFooter">
        <h3>Follow me:</h3>
        <ul className="navBarFooter">
          <li>
            <a href="https://github.com/Cancellier27">
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/filipe-cancellier-da-costa-8459ab160/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
