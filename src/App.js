/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes />

      <Footer />
    </div>
  );
}

export default App;
