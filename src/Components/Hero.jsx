import img1 from '../assets/IMG-1.jpg';
import img2 from '../assets/P2.jpg';
import img3 from '../assets/IMG-3.jpg';

const Hero = ({ activeTab }) => {
  // Decide which asset to display based on the active state selection
  let currentImage = img1; // Default fallback image
  let imageAlt = 'Kuriftu Resorts Home View';

  if (activeTab === 'Reservations') {
    currentImage = img2;
    imageAlt = 'Kuriftu Resorts Reservations View';
  } else if (activeTab === 'Sales') {
    // You can point this to another image later if you want a distinct Sales view!
    currentImage = img3;
    imageAlt = 'Kuriftu Resorts Sales View';
  }

  return (
    <section className="max-w-7xl mx-auto mt-6 px-4 md:px-6 relative z-10 animate-fade-in font-['Inter',sans-serif]">
      {/* 
        This replaces the solid green background box from image_2d679d.png 
        with your full-bleed dynamic asset layout frame
      */}
      <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-md relative bg-zinc-100">
        <img
          key={activeTab} // Using a key triggers a subtle re-fade animation when switching tabs!
          src={currentImage}
          alt={imageAlt}
          className="w-full h-full object-cover transition-all duration-500 ease-out animate-fade-in"
        />

        {/* Soft elegant vignette overlay to maintain premium depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
