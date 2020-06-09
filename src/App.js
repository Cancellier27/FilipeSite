import React from 'react';
import './App.css';

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import About from './components/about/about'

function App() {
  return (
    <div className="App">
      <Header />

      <About />

      <Footer />
    </div>
  );
}

export default App;
