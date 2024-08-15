import React from 'react';
import adventureIcon from '../assets/adventure-icon.png';
import affordableIcon from '../assets/affordable-icon.png';
import efficientIcon from '../assets/efficient-icon.png';
import expertiseIcon from '../assets/expertise-icon.png';

const WhyUs = () => {
    return (
        <section className="text-gray-700 body-font">
            <div className="flex justify-center mt-10 text-4xl font-bold">
                Why Us?
            </div>

            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src={adventureIcon} alt="Adventure" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Unforgettable Adventures</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src={affordableIcon} alt="Affordable" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Affordable Prices</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src={efficientIcon} alt="Efficient" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 sm:w-1/2">
                        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
                            <div className="flex justify-center">
                                <img src={expertiseIcon} alt="Expertise" className="w-32 mb-3" />
                            </div>
                            <h2 className="title-font font-regular text-2xl text-gray-900">Expert Travel Guides</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
