import React from 'react';
import aboutImage from '../assets/about.jpg'; // Adjust the path according to your project structure

const AboutUs = () => {
    return (
        <div className="sm:flex items-center max-w-screen-xl mx-auto">
            <div className="sm:w-1/2 p-10">
                <div className="image object-center text-center">
                    <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-[rgb(171,238,223)] uppercase">About Us</span>
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                        Discover <span className="text-[rgb(171,238,223)]">Your World</span> with Us
                    </h2>
                    <p className="text-gray-700">
                        We are passionate about travel and committed to helping you explore the world with ease and excitement. 
                        Whether you're seeking adventure, relaxation, or cultural experiences, we provide the best travel solutions tailored to your needs. 
                        Let us be your guide to unforgettable journeys.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
