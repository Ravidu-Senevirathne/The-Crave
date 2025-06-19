import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard.jsx';
import './App.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import FeaturesSection from './components/FeaturesSection.jsx';
import MenuSection from './components/MenuSection.jsx';
import DealsSection from './components/DealsSection.jsx';
import CombosSection from './components/ComboSection.jsx';
import BlogSection from './components/BlogSection.jsx';
import Footer from './components/Footer.jsx';

const MainLayout = () => (
  <>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <MenuSection />
    <DealsSection />
    <CombosSection />
    <BlogSection />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
