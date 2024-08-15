import React from 'react';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Features from './Features';
import ImagesGallery from './ImagesGallery';
import WhyUs from './WhyUs';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhyUs />
            <AboutUs />
            <Features />
            <ImagesGallery />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
