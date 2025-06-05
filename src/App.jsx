import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import MenuSection from './components/MenuSection.jsx';
import DealsSection from './components/DealsSection.jsx';
import CombosSection from './components/ComboSection.jsx';



function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <MenuSection/>
      <DealsSection/>
      <CombosSection/>
      
      
    </>
  )
}

export default App
