import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProcessAndTools } from './components/ProcessAndTools';
import { MeetingSection } from './components/MeetingSection';
import { PortfolioSection } from './components/PortfolioSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialSection } from './components/TestimonialSection';
import { FAQSection } from './components/FAQSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { MeetingPage } from './components/MeetingPage';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      const newHash = window.location.hash;
      setCurrentHash(newHash);
      
      // Scroll handling
      if (newHash === '#meeting' || newHash === '' || newHash === '#') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        // For section links, wait for render
        setTimeout(() => {
          const id = newHash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Listen for both hashchange and popstate to be safe
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    
    // Check initial
    handleLocationChange();

    return () => {
        window.removeEventListener('hashchange', handleLocationChange);
        window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const handleBookMeeting = () => {
    window.location.hash = 'meeting';
    setCurrentHash('#meeting');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Normalize hash to determine view
  const isMeetingPage = currentHash === '#meeting';

  return (
    <div className="min-h-screen bg-white font-bengali text-slate-900">
      <Navbar />
      <main>
        {isMeetingPage ? (
          <MeetingPage />
        ) : (
          <>
            <Hero />
            <ProcessAndTools />
            <MeetingSection onBookMeeting={handleBookMeeting} />
            <PortfolioSection />
            <PricingSection />
            <TestimonialSection />
            <FAQSection />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;