/* eslint-disable linebreak-style */
import React from 'react';
import './index.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Routes from './routes';

function PageDefault({ children }) {
  return (
    <>
      <Header />
      
        {children}

      <Footer />
    </>
  );
}

export default PageDefault;
