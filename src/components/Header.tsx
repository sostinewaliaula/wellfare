import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Update localStorage when dark mode changes
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    // Toggle dark class on document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Welfare Department logo" className="h-8 w-auto mr-2" />
          <span className="text-2xl font-extrabold text-[#363742] dark:text-white tracking-tight"><span className="text-[#db4c57]"></span></span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-[#363742] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-[#363742] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 font-medium text-[#363742] dark:text-gray-200">
            <a href="#" className="relative group">
              <span className="hover:text-[#db4c57] transition-colors">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-[#db4c57] transition-colors">Contributions</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-[#db4c57] transition-colors">Benefits</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-[#db4c57] transition-colors">Resources</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group">
              <span className="hover:text-[#db4c57] transition-colors">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#db4c57] transition-all group-hover:w-full"></span>
            </a>
          </nav>
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <a href="#" className="inline-block px-6 py-2 bg-[#db4c57] hover:bg-[#af3841] text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">Member Login</a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <a href="#" className="inline-block px-4 py-1.5 bg-[#db4c57] hover:bg-[#af3841] text-white rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">Member Login</a>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-[#363742] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="px-6 py-4 space-y-4 overflow-y-auto h-[calc(100%-80px)]">
          <a href="#" className="block text-[#363742] dark:text-white hover:text-[#db4c57] transition-colors py-2">Home</a>
          <a href="#" className="block text-[#363742] dark:text-white hover:text-[#db4c57] transition-colors py-2">Contributions</a>
          <a href="#" className="block text-[#363742] dark:text-white hover:text-[#db4c57] transition-colors py-2">Benefits</a>
          <a href="#" className="block text-[#363742] dark:text-white hover:text-[#db4c57] transition-colors py-2">Resources</a>
          <a href="#" className="block text-[#363742] dark:text-white hover:text-[#db4c57] transition-colors py-2">Contact</a>
        </nav>
      </div>
      {/* Overlay when menu is open */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-50 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
} 