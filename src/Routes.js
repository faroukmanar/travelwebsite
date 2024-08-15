import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import ImagesGallery from './components/ImagesGallery';
import Navbar from './components/Navbar';
import WhyUs from './components/WhyUs';

const AppRoutes = () => {
    return (
        <Router>
            <Navbar /> {/* The Navbar will be visible on all pages */}
            <Routes>
                <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
                <Route path="/hero" element={<HeroSection />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<Features />} />
                <Route path="/gallery" element={<ImagesGallery />} />
                <Route path="/why-us" element={<WhyUs />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
