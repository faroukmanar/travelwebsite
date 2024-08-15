import React from 'react';
import beaches from '../assets/beaches.jpeg';
import mountains from '../assets/montains.jpeg';
import cityscapes from '../assets/cityscapes.jpeg';
import historicalSites from '../assets/historical_sites.jpeg';
import adventures from '../assets/adventures.jpeg';
import culturalExperiences from '../assets/cultural_experiences.jpeg';

const ImagesGallery = () => {
    const categories = [
        { image: beaches, title: 'Beaches' },
        { image: mountains, title: 'Mountains' },
        { image: cityscapes, title: 'Cityscapes' },
        { image: historicalSites, title: 'Historical Sites' },
        { image: adventures, title: 'Adventures' },
        { image: culturalExperiences, title: 'Cultural Experiences' },
    ];

    return (
        <div className="ml-10 mr-10">
            <h2 className="text-4xl font-bold text-center mb-10">Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <div key={index} className="relative rounded overflow-hidden">
                        <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
                        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-medium transition duration-300 ease-in-out hover:bg-opacity-60">
                            {category.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;
