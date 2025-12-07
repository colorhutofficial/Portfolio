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
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { RefundPolicy } from './components/RefundPolicy';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Listen for hashchange
    window.addEventListener('hashchange', handleLocationChange);
    // Also listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
        window.removeEventListener('hashchange', handleLocationChange);
        window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Handle scrolling when hash changes
  useEffect(() => {
    const hash = currentHash.split('?')[0];
    
    if (hash === '#meeting' || hash === '#privacy' || hash === '#refund') {
      window.scrollTo(0, 0);
    } else if (hash === '' || hash === '#') {
      window.scrollTo(0, 0);
    } else {
      // For section links (#section-id), wait for render then scroll
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [currentHash]);

  const handleBookMeeting = () => {
    window.location.hash = 'meeting';
    // State update will trigger via event listener, but we can set it optimistically too
    setCurrentHash('#meeting');
  };

  // Normalize hash to determine view (ignore query params)
  const hash = currentHash.split('?')[0];
  const isMeetingPage = hash === '#meeting';
  const isPrivacyPage = hash === '#privacy';
  const isRefundPage = hash === '#refund';

  return (
    <div className="min-h-screen bg-white font-bengali text-slate-900">
      <Navbar />
      <main>
        {isMeetingPage ? (
          <MeetingPage />
        ) : isPrivacyPage ? (
          <PrivacyPolicy />
        ) : isRefundPage ? (
          <RefundPolicy />
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