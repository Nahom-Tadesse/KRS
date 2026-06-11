import React from 'react';

const ContactCard = ({ activeTab, phone }) => {
  const getProfileData = () => {
    switch (activeTab) {
      case "Sales":
        return { name: "Megnot Abay", role: "Sales Executive", placeholder: "Sales Executive Avatar" };
      case "Reservations":
        return { name: "Booking Desk", role: "Reservations Agent", placeholder: "Reservations Avatar" };
      case "Home":
      default:
        return { name: "Kuriftu Resorts", role: "General Inquiry Center", placeholder: "KURIFTU BRANDING LOGO" };
    }
  };

  const profile = getProfileData();

  // Strip all formatting spaces so the tel: protocol functions perfectly on mobile system bridges
  const cleanDialerNumber = phone.replace(/\s+/g, '');

  return (
    <div className="bg-[#EAEAEA] rounded-3xl p-8 w-full max-w-sm border border-black/5 interactive-card-shadow hover:-translate-y-1 transition-all duration-300 font-['Inter',sans-serif]">
      {/* Dark Media/Branding Container Frame */}
      <div className="h-48 bg-[#2C2C2E] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group/img">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
        <span className="text-zinc-500 text-[10px] tracking-[0.2em] font-bold uppercase p-4 text-center select-none">
          {profile.placeholder}
        </span>
      </div>

      <h2 className="text-3xl font-black text-[#1E1E1E] tracking-tight transition-all duration-300">
        {profile.name}
      </h2>
      <p className="text-gray-500 font-semibold text-sm mb-6 mt-1 transition-all duration-300">
        {profile.role}
      </p>

      {/* Dynamic Data Feed with Action Anchor Routing Layouts */}
      <div className="space-y-3 text-xs md:text-sm text-gray-700">
        
        {/* Office Line Link Row */}
        <a 
          href={`tel:${cleanDialerNumber}`}
          className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
        >
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Office Line</span>
          <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">{phone}</span>
        </a>

        {/* Mobile Desk Link Row */}
        <a 
          href={`tel:${cleanDialerNumber}`}
          className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
        >
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Mobile Desk</span>
          <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">{phone}</span>
        </a>

        {/* WhatsApp Chat Endpoint Link Row */}
        <a 
          href="https://wa.me/2519110911899"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
        >
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">WhatsApp </span>
          <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">{phone}</span>
        </a>

      </div>

      {/* Primary Card WhatsApp CTA Anchor */}
      <a 
        href="https://wa.me/2519110911899"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center mt-6 bg-black hover:bg-zinc-800 text-white py-3 rounded-full font-bold text-sm tracking-wide shadow-md shadow-black/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        Start Messaging
      </a>
    </div>
  );
};

export default ContactCard;