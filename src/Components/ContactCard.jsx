import React from 'react';
import p1Image from '../assets/P1.jpg';
import logoImage from '../assets/1-KRS-White.png';

const ContactCard = ({ activeTab, phone, contacts }) => {
  const getProfileData = () => {
    switch (activeTab) {
      case 'Sales':
        return {
          name: 'Megnot Abay',
          role: 'Sales Executive',
          email: 'megnot.abay@kurifturesorts.com',
        };
      case 'Reservations':
        return {
          name: 'Booking Desk',
          role: 'Reservations Agent',
          email: 'booking@kurifturesorts.com',
        };
      case 'Home':
      default:
        return { name: 'Kuriftu Resorts', role: 'General Inquiry Center' };
    }
  };

  const profile = getProfileData();

  // Safe fallback helper to clean layout spaces so system phone dialers process links cleanly
  const getCleanNumber = (numString) => (numString || '').replace(/\s+/g, '');

  return (
    <div className="bg-[#EAEAEA] rounded-3xl p-8 w-full max-w-md border border-black/5 interactive-card-shadow hover:-translate-y-1 transition-all duration-300 font-['Inter',sans-serif]">
      {/* SEPARATED IMAGE BOXES */}
      {activeTab === 'Sales' ? (
        /* 1. SEPARATE BOX FOR SALES: Increased from h-24 to h-48 to fix image_203fb9.png cropping */
        <div className="h-64 w-full bg-[#2C2C2E] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group/img">
          <img
            src={p1Image}
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ) : (
        /* 2. SEPARATE BOX FOR LOGO: Retains the smaller layout with internal container buffers */
        <div className="h-24 w-full bg-[#2C2C2E] rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group/img p-4">
          <img
            src={logoImage}
            alt="Kuriftu Resorts Logo"
            className="w-auto h-full max-h-[80%] max-w-[90%] object-contain block transition-transform duration-500 group-hover/img:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      )}

      <h2 className="text-3xl font-black text-[#1E1E1E] tracking-tight transition-all duration-300">
        {profile.name}
      </h2>
      <p className="text-gray-500 font-semibold text-sm mb-6 mt-1 transition-all duration-300">
        {profile.role}
      </p>

      {/* Dynamic Data Feed */}
      <div className="space-y-3 text-xs md:text-sm text-gray-700">
        {activeTab === 'Home' && contacts && contacts.length > 0 ? (
          // HOME TAB VIEW: Maps out full location arrays without height limits or scrollbars
          contacts.map((resort, idx) => (
            <a
              key={idx}
              href={`tel:${getCleanNumber(resort.phone)}`}
              className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
            >
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                {resort.label}
              </span>
              <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">
                {resort.phone}
              </span>
            </a>
          ))
        ) : (
          // SALES & RESERVATIONS VIEW: Balanced channels (Office, Mobile, WhatsApp, Email)
          <>
            {/* Office Line Link Row */}
            <a
              href={`tel:${getCleanNumber(phone)}`}
              className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
            >
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Office
              </span>
              <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">
                {phone}
              </span>
            </a>

            {/* Mobile Desk Link Row */}
            <a
              href={`tel:${getCleanNumber(phone)}`}
              className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
            >
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Mobile
              </span>
              <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">
                {phone}
              </span>
            </a>

            {/* WhatsApp Link Row */}
            <a
              href={
                activeTab === 'Sales'
                  ? 'https://wa.me/251939343536'
                  : 'https://wa.me/251939343536'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
            >
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                WhatsApp
              </span>
              <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200">
                {phone}
              </span>
            </a>

            {/* Email Link Row */}
            <a
              href={`mailto:${profile.email}`}
              className="border-b border-gray-300 pb-2 flex justify-between items-center group/line hover:border-gray-500 transition-colors duration-200"
            >
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                Email
              </span>
              <span className="font-bold text-zinc-800 group-hover/line:text-black transition-colors duration-200 lowercase">
                {profile.email}
              </span>
            </a>
          </>
        )}
      </div>

      {/* Primary Card WhatsApp CTA Anchor */}
      <a
        href={
          activeTab === 'Sales'
            ? 'https://wa.me/251939343536'
            : 'https://wa.me/251939343536'
        }
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
