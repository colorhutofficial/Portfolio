import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-bengali text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProcessAndTools />
        <MeetingSection />
        <PortfolioSection />
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;