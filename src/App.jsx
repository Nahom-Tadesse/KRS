import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import ContactInfo from './Components/ContactInfo';
import Footer from './Components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    // Select all elements marked for scroll animations across the active view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.05, // Trigger quickly as soon as 5% of the section is visible
        rootMargin: '0px 0px -30px 0px',
      },
    );

    animatedElements.forEach((el) => {
      // Clean previous visibility classes so mounting a new tab resets the animation cleanly
      el.classList.remove('is-visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeTab]); // Re-run the observer sweeps every single time a tab changes!

  return (
    <div className="min-h-screen flex flex-col justify-between antialiased font-['Inter',sans-serif]">
      <div>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main>
          {/* 
            CRITICAL FIX: Adding key={activeTab} tells React to completely re-mount 
            this wrapper, forcing the slide-up animation to run freshly on click!
          */}
          <div key={`hero-${activeTab}`} className="animate-on-scroll">
            <Hero activeTab={activeTab} />
          </div>

          <div key={`contact-${activeTab}`} className="animate-on-scroll">
            <ContactInfo activeTab={activeTab} />
          </div>
        </main>
      </div>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
