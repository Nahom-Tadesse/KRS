import { useState } from 'react';
import logo from "../assets/2-KRS-Black.png";

const Header = ({ activeTab, setActiveTab }) => {
  const navLinks = ['Home', 'Sales', 'Reservations'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto pt-4 md:pt-6 px-4 md:px-6 relative z-50 animate-fade-in-up font-['Inter',sans-serif]">
      {/* Top Bar - Forced Side-by-Side Horizontal Row Layout */}
      <div className="bg-[#1E1E1E] rounded-full px-6 md:px-8 py-2.5 text-white text-[10px] sm:text-xs md:text-sm flex flex-row items-center justify-start gap-4 sm:gap-6 overflow-x-auto whitespace-nowrap shadow-sm no-scrollbar">
        <a
          href="tel:+2519110911865"
          className="flex items-center gap-1.5 hover:text-gray-300 transition-colors duration-200"
        >
          <span className="font-bold text-white">Call us</span>
          <span className="text-gray-300 font-normal">+2519 1109 11865</span>
        </a>

        <span className="text-zinc-700 select-none">|</span>

        <a
          href="mailto:booking@kurifturesorts.com"
          className="flex items-center gap-1.5 hover:text-gray-300 transition-colors duration-200"
        >
          <span className="font-bold text-white">Email us</span>
          <span className="text-gray-300 font-normal underline decoration-zinc-600 underline-offset-2">
            booking@kurifturesorts.com
          </span>
        </a>
      </div>

      {/* Main Navbar */}
      <div className="mt-4 bg-white rounded-[24px] md:rounded-full border-2 border-zinc-200 px-4 md:px-8 py-3 flex items-center justify-between relative">
        
        {/* Brand Logo Section */}
        <div className="flex items-center justify-center cursor-pointer group h-8 md:h-10">
          <img
            src={logo}
            alt="Kuriftu Resorts Logo"
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Navigation Links with Smooth Underline Animation */}
        <nav className="hidden md:flex gap-10 items-center text-sm font-semibold text-zinc-600">
          {navLinks.map((link) => {
            const isActive = activeTab === link;
            return (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(link);
                }}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-black font-bold' : 'hover:text-black'
                }`}
              >
                {link}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-green-600 transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Group Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* FIXED: Changed to an <a> link targeted to the universal WhatsApp click-to-chat API */}
          <a 
            href="https://wa.me/251911091189"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:bg-zinc-800 active:scale-95 transition-all duration-200 text-center shadow-sm"
          >
            Message
          </a>

          <a 
            href="https://kurifturesorts.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex border border-zinc-300 bg-white text-black px-4 md:px-6 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm items-center gap-1.5 hover:bg-zinc-50 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Website ↗
          </a>

          {/* Standard Vector Mobile Hamburg Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-800 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Panel Drawer */}
        {mobileMenuOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border-2 border-zinc-200 rounded-2xl p-4 flex flex-col gap-3 shadow-lg md:hidden z-50 animate-fade-in-up">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActiveTab(link);
                  setMobileMenuOpen(false);
                }}
                className={`text-left w-full py-2.5 px-4 rounded-xl font-bold text-sm transition-all ${
                  activeTab === link
                    ? 'bg-zinc-100 text-black border-l-4 border-black'
                    : 'text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;