import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Main from './components/main/main'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Main} path="/" exact />
      <Route component={About} path="/about" />
      <Route component={Projects} path="/projects" />
      <Route component={Contact} path="/contact" />
    </BrowserRouter>
  )
}

export default Routes