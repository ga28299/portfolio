import React, { useState, useEffect } from 'react';
import SunIcon from '../assets/sun.svg';
import MoonIcon from '../assets/moon.svg';


export const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

      const toggleMobileMenu = () => {
        console.log('Toggle mobile menu clicked');
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };

return (
    <nav className="bg-white dark:bg-dark font-poppins text-lg bg-opacity-50 dark:bg-opacity-50 fixed top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-greeny">&lt;George/&gt;</h1>
          </div>
          <div className="hidden md:block z-50">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">Home</a>
              </li>
              <li>
                <a href="/about" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">About</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">Projects</a>
              </li>
              <li>
                <a href="/resume" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">Resume</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-200 dark:bg-greeny text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md transform transition-transform hover:-translate-y-1">
                Contact Me
            </button>
            <button
              className=" text-gray-800 dark:text-gray-200 px-3 py-2 rounded-md flex items-center justify-center transition-transform duration-300 transform"
              onClick={toggleDarkMode}
            >
              <img
                src={darkMode ? SunIcon : MoonIcon}
                className={`h-6 w-6 transition-transform duration-300 ${darkMode ? 'rotate-180' : 'rotate-0'}`}
                alt={darkMode ? 'Light Mode' : 'Dark Mode'}
                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
              />
            </button>
            <div className="md:hidden z-50">
              <button
                className="text-gray-800 dark:text-gray-200 focus:outline-none p-2 border-2"
                onClick={toggleMobileMenu}
              >
                <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white dark:bg-dark shadow-lg py-2 z-50">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="/" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white block py-2">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white block py-2">About</a>
            </li>
            <li>
              <a href="/projects" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white block py-2">Projects</a>
            </li>
            <li>
              <a href="/resume" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white block py-2">Resume</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}