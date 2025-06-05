import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import PromisesSection from './components/PromisesSection.jsx';
import HeroSection from './components/HeroSection.jsx';


function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <PromisesSection/>
    </>
  )
}

export default App
