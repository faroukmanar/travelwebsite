import React, { useState } from 'react';
import heroImage from '../assets/hero.jpeg'; // Adjust the path to your image in the assets folder

const HeroSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-wrap sm:flex-nowrap">
            {/* Left Section */}
            <div className="w-full sm:w-8/12 mb-10 sm:mb-0">
                <div className="container mx-auto h-full sm:p-10">
                    <nav className="flex px-4 justify-between items-center">
                        <div className="text-4xl font-bold">
                            Travel<span className="text-[rgb(171,238,223)]">.</span>
                        </div>
                    </nav>
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                Find your <span className="text-[rgb(171,238,223)]">greeny</span> stuff for your room
                            </h1>
                            <div className="w-20 h-2 bg-[rgb(171,238,223)] my-4"></div>
                            <p className="text-xl mb-10">
                                Embark on a journey to discover the world's hidden gems with us. From sun-soaked beaches to bustling cityscapes,
                                we bring you closer to the places you've always dreamed of visiting. {isExpanded && (
                                    <>
                                        Whether you're seeking adventure, relaxation, or a cultural experience, our carefully curated travel guides
                                        and tips ensure your trip is nothing short of extraordinary. Join us in exploring new horizons and making
                                        unforgettable memories.
                                    </>
                                )} <button onClick={toggleExpand} className="text-[rgb(171,238,223)] mb-4">
                                {isExpanded ? 'See Less' : 'See More'}
                            </button>
                            </p>
                           

                            <button className="bg-[rgb(171,238,223)] text-white text-2xl font-medium px-4 py-2 rounded shadow">
                                Learn More
                            </button>
                        </div>
                    </header>
                </div>
            </div>
            {/* Right Section - Image */}
            <img
                src={heroImage}
                alt="Leafs"
                className="w-full h-48 object-cover sm:h-screen sm:w-4/12 rounded-lg sm:m-4"
            />
        </div>
    );
};

export default HeroSection;
