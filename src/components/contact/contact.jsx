/* eslint-disable linebreak-style */
import React from 'react';
import './contact.css';
import PageDefault from '../../pageDefault';

const Contact = () => (
  <PageDefault>

    <main className="ContactContainer">
      <div className="formContainer">
        <form className="formItSelf">
          <div className="divName">
            <input type="text" placeholder="Name" />
          </div>
          <div className="divEmailPhone">
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Phone" className="phoneInput" />
          </div>
          <div>
            <textarea type="text" placeholder="Contact Subject" maxLength="400" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contactText">
        <p className="pTextContact">
          Hello, hope you have enjoyed my work
        <br />
          <br />
        If you have any questions about me, you can send me a message,
        <br />
        and I'll try to answer you as soon as posible.
        <br />
          <br />
        Thank you, and have a good day!
      </p>
      </div>
    </main>

  </PageDefault>
);

export default Contact;
