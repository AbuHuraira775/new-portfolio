import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import About from './about/About'
import Resume from './profile/Profile'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Services from './services/Services'
import Skills from './skills/Skills'

function App() {

  return (
    <div className="app w-full ">
      <Navbar />
      <Home />
      <Resume />
      <Skills />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
