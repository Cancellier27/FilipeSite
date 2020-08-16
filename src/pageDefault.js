/* eslint-disable linebreak-style */
import React from 'react';
import './index.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Routes from './routes';

function PageDefault() {
  return (
    <>
      <Header />

      <Routes />

      <Footer />
    </>
  );
}

export default PageDefault;
