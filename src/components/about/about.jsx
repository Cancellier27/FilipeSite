/* eslint-disable linebreak-style */
import React from 'react';
import './about.css';

import Filipe from '../../assets/images/FilipeCancellier.png';
import PageDefault from '../../pageDefault';

const About = () => (
  <PageDefault>

    <main className="aboutPage">
      <div className="divAvatar">
        <img src={Filipe} alt="Filipe" className="filipeAvatar" />
      </div>

      <div className="textAbout">
        <p>
          <span className="first-letter">H</span>
          ello, my name is
          <strong> Filipe Cancellier da Costa</strong>
          .
          <br />
          <br />

          I have a graduation in Civil Engineering and I'm originally from Brazil.
          <br />
          <br />

          My career is resumed to engineering jobs, so I all my professionals skill are turned to this area, but I was
          felling that something was missing, I wasn't totally happy in Civil Engineer area, so I decided to try another thing.
          I always enjoyed computer, games and technology so I thought "Why not try codding?", and so I did.
          <br />
          <br />

          I started my studies in codding in 2018, and at that time I started studying
          {' '}
          <a
            className="siteLink"
            href="https://www.python.org/"
          >
            Python
          </a>
          {' '}
          and so my first "Hello World" was done in Python. The codding was
          nice, all the logic and the algorithms, I was really enjoying that, but I wasn't felling good about the language, I mean
          Python is an amazing language, but for a start, you would like to see thing happen on screen, and not see only numbers.
          <br />
          So I had a conversation with my cousin, that is a Front-End Engineer, and he showed me
          <a className="siteLink" href="https://developer.mozilla.org/en-US/docs/Web/HTML"> HTML</a>
          ,
          <a className="siteLink" href="https://developer.mozilla.org/en-US/docs/Web/CSS"> CSS</a>
          {' '}
          and
          <a className="siteLink" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> Javascript</a>
          ,
          he said that maybe I would like it more than python.
          After that day I turned all my studies routine to learn web-development.
          <br />
          <br />
          It's so nice to learn web, because you can see everything that you code in front of you and can see
          how much do you progress every single day.
          
I am very excited about this whole area of ​​programming, and I can't wait to test my skills in the most different types of projects.
          <br />
          <br />
          <br />
          {' '}
          <br />
        </p>
      </div>
    </main>

  </PageDefault>
);

export default About;
