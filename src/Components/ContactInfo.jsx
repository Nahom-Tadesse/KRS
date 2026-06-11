import React, { useState } from 'react';
import ContactCard from "./ContactCard";

const ContactInfo = ({ activeTab }) => {
  const locations = [
    { name: "Bishoftu", url: "https://kurifturesorts.com/resorts/bishoftu" },
    { name: "Entoto", url: "https://kurifturesorts.com/resorts/entoto" },
    { name: "KAV", url: "https://kurifturesorts.com/resorts/africanVillage" },
    { name: "Awash", url: "https://kurifturesorts.com/resorts/awash" },
    { name: "Lake Tana", url: "https://kurifturesorts.com/resorts/laketana" },
    { name: "Palm", url: "https://kurifturesorts.com/resorts/thepalm" }
  ];
  
  const [locationsOpen, setLocationsOpen] = useState(false);

  const contentConfig = {
    Home: {
      title: "Welcome to Kuriftu Resorts",
      desc: "Experience premier luxury destinations across Ethiopia's pristine natural spaces.",
      phone: "+2519110911800",
      displayPhone: "+2519 1109 11800",
    },
    Sales: {
      title: "Connect with Sales",
      desc: "Inquire about premium corporate rates, custom packages, and event memberships.",
      phone: "+2519110911865",
      displayPhone: "+2519 1109 11865",
    },
    Reservations: {
      title: "Book Your Stay Today",
      desc: "Secure accommodations across any resort villa quickly through our dedicated channels.",
      phone: "+2519110911899",
      displayPhone: "+2519 1109 11899",
    },
  };

  const activeContent = contentConfig[activeTab] || contentConfig.Home;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 animate-fade-in-up [animation-delay:200ms] font-['Inter',sans-serif]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Informative Column */}
        <div className="w-full lg:col-span-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#1E1E1E] mb-4 md:mb-6 leading-[1.15]">
            {activeContent.title}
          </h1>

          <p className="text-gray-500 text-sm md:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
            {activeContent.desc}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
            {/* Contact Channels */}
            <div className="w-full">
              <h3 className="font-bold text-base md:text-lg text-[#1E1E1E] mb-1.5">Direct Line</h3>
              {/* FIXED: Wrapped the direct line variable inside a tel: anchor to launch phone app instantly */}
              <a 
                href={`tel:${activeContent.phone}`}
                className="block text-gray-500 text-sm font-normal mb-4 md:mb-6 hover:text-black transition-colors duration-200"
              >
                {activeContent.displayPhone}
              </a>

              <h3 className="font-bold text-base md:text-lg text-[#1E1E1E] mb-1.5">Email</h3>
              <a href="mailto:booking@kurifturesorts.com" className="inline-flex items-center gap-1 text-gray-500 text-sm font-normal hover:text-black transition-colors duration-200 mb-4 md:mb-6 break-all">
                booking@kurifturesorts.com <span className="text-[10px]">↗</span>
              </a>

              <h3 className="font-bold text-base md:text-lg text-[#1E1E1E] mb-1.5">Website</h3>
              <a href="https://kurifturesorts.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-500 text-sm font-normal hover:text-black transition-colors duration-200">
                kurifturesorts.com <span className="text-[10px]">↗</span>
              </a>
            </div>

            {/* Locations Column */}
            <div className="w-full">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full flex items-center justify-between sm:pointer-events-none text-left focus:outline-none border-b sm:border-0 border-zinc-200 pb-2 sm:pb-0"
              >
                <h3 className="font-bold text-base md:text-lg text-[#1E1E1E]">
                  Our Locations
                </h3>
                <span className={`text-xs text-zinc-400 transition-transform duration-300 sm:hidden ${locationsOpen ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </span>
              </button>

              <div className={`mt-2 md:mt-4 space-y-0.5 overflow-hidden transition-all duration-300 sm:block sm:max-h-none ${
                locationsOpen ? 'max-h-[350px] opacity-100' : 'max-h-0 opacity-0 sm:opacity-100'
              }`}>
                {locations.map((item) => (
                  <a 
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-gray-200 py-2 md:py-2.5 text-gray-500 text-sm font-normal hover:text-black hover:border-gray-400 hover:pl-1 transition-all duration-200 block"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Card Wrapper */}
        <div className="flex justify-center lg:justify-end w-full lg:col-span-5 mt-6 lg:mt-0">
          <ContactCard activeTab={activeTab} phone={activeContent.displayPhone} />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;