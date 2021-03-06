/* eslint-disable linebreak-style */
import React from 'react';
import './main.css';

import helloWorld from '../../assets/images/helloWorld.png';
import PageDefault from '../../pageDefault';

const Main = () => (
  <PageDefault>

    <main className="HomePage">
      <div className="textMainHome">
        <p>
          "Hello, I'm a civil engineer,
        <br />
        specializing in front-end web development.
        <br />
          <br />
        And my name is Filipe Cancellier da Costa"
      </p>
      </div>

      <div className="helloWorld">
        <img src={helloWorld} alt="Hello World HTML" />
      </div>
    </main>

  </PageDefault>

);

export default Main;
