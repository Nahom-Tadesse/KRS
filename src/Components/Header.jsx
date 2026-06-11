import { useState } from 'react';
import logo from '../assets/2-KRS-Black.png';

const Header = ({ activeTab, setActiveTab }) => {
  const navLinks = ['Home', 'Sales', 'Reservations'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-7xl mx-auto pt-4 md:pt-6 px-4 md:px-6 relative z-50 animate-fade-in-up font-['Inter',sans-serif]">
      {/* Top Bar Contact Strip */}
      <div className="bg-[#1E1E1E] rounded-full px-5 md:px-8 py-2.5 text-white text-xs md:text-sm flex items-center justify-start gap-5 sm:gap-6 shadow-sm">
        {/* Phone Action Element */}
        <a
          href="tel:+2519110911865"
          className="flex items-center gap-2 text-zinc-300 hover:text-white active:scale-95 transition-all duration-200"
          aria-label="Call Us"
        >
          {/* Beautiful Minimalist Solid Phone Icon (Mobile Only) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:hidden"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97a16.616 16.616 0 0 0 6.542 6.542l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>

          {/* Desktop Text Layout (Hidden on Mobile) */}
          <span className="hidden sm:inline font-bold text-white">Call us</span>
          <span className="hidden sm:inline font-normal text-zinc-300">
            +2519 1109 1185
          </span>
        </a>

        {/* Separator Pipe - Hidden on Mobile */}
        <span className="text-zinc-800 select-none hidden sm:inline">|</span>

        {/* Email Action Element */}
        <a
          href="mailto:booking@kurifturesorts.com"
          className="flex items-center gap-2 text-zinc-300 hover:text-white active:scale-95 transition-all duration-200"
          aria-label="Email Us"
        >
          {/* Beautiful Minimalist Solid Envelope Icon (Mobile Only) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:hidden"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>

          {/* Desktop Text Layout (Hidden on Mobile) */}
          <span className="hidden sm:inline font-bold text-white">
            Email us
          </span>
          <span className="hidden sm:inline font-normal text-zinc-300 underline decoration-zinc-700 underline-offset-4">
            booking@kurifturesorts.com
          </span>
        </a>
      </div>

      {/* Main Brand Action Hub */}
      <div className="mt-4 bg-white rounded-[24px] md:rounded-full border-2 border-zinc-200 px-4 md:px-8 py-3 flex items-center justify-between relative">
        <div className="flex items-center justify-center cursor-pointer group h-8 md:h-10">
          <img
            src={logo}
            alt="Kuriftu Resorts Logo"
            className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

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

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="https://wa.me/251911091185"
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-800 hover:bg-zinc-100 rounded-full transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

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
