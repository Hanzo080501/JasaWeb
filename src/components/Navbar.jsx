'use client';
import { motion } from 'framer-motion';
import { useDarkMode } from '@/app/data/useDarkMode';
import { useState } from 'react';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      className="fixed w-full bg-dark-secondary/80 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold dark:text-gray-200">JasaWebsite.</div>

          {/* Navbar links and Hamburger menu for mobile */}
          <div className="flex items-center space-x-8">
            {/* Links */}
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-700 dark:text-gray-200">
                Home
              </a>
              <a href="#fitur" className="text-gray-700 dark:text-gray-200">
                Features
              </a>
              <a href="#harga" className="text-gray-700 dark:text-gray-200">
                Price List
              </a>
              <a href="#kontak" className="text-gray-700 dark:text-gray-200">
                Contact
              </a>
            </div>

            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2v2a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7h2A9 9 0 0 0 12 2Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 1 1-9 9 9 9 0 0 1 9-9Z" />
                </svg>
              )}
            </button>

            {/* Hamburger icon for mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full text-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden absolute left-0 right-0 bg-dark-secondary/80 backdrop-blur-md py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#hero" className="text-gray-700 dark:text-gray-200">
              Home
            </a>
            <a href="#fitur" className="text-gray-700 dark:text-gray-200">
              Features
            </a>
            <a href="#harga" className="text-gray-700 dark:text-gray-200">
              Price List
            </a>
            <a href="#kontak" className="text-gray-700 dark:text-gray-200">
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
