import React from 'react';
// Importing the custom branding asset to show inside the footer wrapper
import logo from '../assets/1-KRS-White.png';

const Footer = ({ setActiveTab }) => {
  // Configured linking arrays to support both functional state shifts and direct external URLs
  const companyLinks = [
    { name: 'Home', type: 'state', value: 'Home' },
    { name: 'Sales', type: 'state', value: 'Sales' },
    { name: 'Reservations', type: 'state', value: 'Reservations' },
    { name: 'Our Website', type: 'url', value: 'https://kurifturesorts.com' },
    {
      name: 'Booking',
      type: 'url',
      value:
        'https://book.travelbookgroup.com/premium/group_index.html?id_stile=22372&tst_prntz=si&headvar=ok&lingua_int=eng&id_gruppo=31028&dc_gruppo=2281',
    },
    {
      name: 'Contact',
      type: 'url',
      value: 'https://kurifturesorts.com/contact',
    },
  ];

  const resortLinks = [
    {
      name: 'Bishoftu',
      url: 'https://kurifturesorts.com/resorts/bishoftu',
    },
    {
      name: 'Entoto',
      url: 'https://kurifturesorts.com/resorts/entoto',
    },
    {
      name: 'African Village',
      url: 'https://kurifturesorts.com/resorts/africanVillage',
    },
    { name: 'Awash', url: 'https://kurifturesorts.com/resorts/awash' },
    {
      name: 'Lake Tana',
      url: 'https://kurifturesorts.com/resorts/laketana',
    },
    {
      name: 'The Palm',
      url: 'https://kurifturesorts.com/resorts/thepalm',
    },
  ];

  return (
    <footer className="max-w-7xl mx-auto w-full px-4 md:px-6 pb-10 mt-16 animate-fade-in-up [animation-delay:350ms] font-['Inter',sans-serif]">
      {/* Main Container Container Layout Frame */}
      <div className="relative w-full bg-gradient-to-r from-[#111111] to-[#1E1E22] rounded-[32px] md:rounded-[40px] p-8 md:p-16 text-white overflow-hidden border border-zinc-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 pb-12">
          {/* Slogan and Brand Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* FIXED: Removed the green accent thing and added a dedicated, crisp logo frame container */}
              <div className="mb-6 h-10 md:h-12 flex items-center justify-start">
                <img
                  src={logo}
                  alt="Kuriftu Resorts White Logo"
                  className="h-full w-auto " // Invert filter guarantees excellent contrast against dark background gradients
                />
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight text-zinc-400">
                Welcome to
                <br />
                <span className="text-white">Kuriftu Resorts & Spa</span>
              </h2>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 md:gap-8 text-xs md:text-sm">
            {/* Company Links */}
            <div>
              <h4 className="font-bold text-zinc-500 mb-4 tracking-wider uppercase text-[10px] md:text-xs">
                Company
              </h4>
              <ul className="space-y-2 md:space-y-2.5 font-normal text-zinc-400">
                {companyLinks.map((link) => {
                  // If it's a state hook link (Home, Sales, Reservations)
                  if (link.type === 'state') {
                    return (
                      <li key={link.name}>
                        <button
                          onClick={() => {
                            setActiveTab(link.value);
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolls up to show the shift
                          }}
                          className="hover:text-white transition-colors duration-200 text-left cursor-pointer focus:outline-none"
                        >
                          {link.name}
                        </button>
                      </li>
                    );
                  }

                  // Standard Web URL Anchor Elements (Our Website, Booking, Contact)
                  return (
                    <li key={link.name}>
                      <a
                        href={link.value}
                        {...(link.name === 'Our Website' ||
                        link.name === 'Booking'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Destinations Links */}
            <div>
              <h4 className="font-bold text-zinc-500 mb-4 tracking-wider uppercase text-[10px] md:text-xs">
                Destinations
              </h4>
              <ul className="space-y-2 md:space-y-2.5 font-normal text-zinc-400">
                {resortLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="border-t border-zinc-800/60 mt-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-[11px] font-normal text-zinc-400">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <span className="font-bold text-zinc-300">
              © 2026 Kuriftu Resorts.
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-500">All rights reserved.</span>
          </div>

          <div className="flex gap-6 font-bold">
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
