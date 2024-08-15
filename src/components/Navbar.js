import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md px-4 py-3 rounded">
            <div className="container flex justify-between items-center mx-auto">
                <Link to="/" className="text-xl font-semibold text-green-500">
                    
                </Link>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                            />
                        </svg>
                    </button>
                </div>

                <div className={`${
                        isOpen ? 'block' : 'hidden'
                    } w-full md:flex md:items-center md:w-auto`}
                >
                    <ul className="flex flex-col md:flex-row md:space-x-6">
                        <li>
                            <Link to="/" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/hero" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                Hero
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/features" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/why-us" className="block py-2 text-gray-700 hover:text-green-500 md:hover:text-green-500 md:p-0">
                                Why Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
