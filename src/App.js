import React from 'react';
import './App.css';

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
