import React, { useRef, useEffect, useContext } from 'react';
// import AboutUs from '../../components/sections/AboutUs';
import Faq from '../../components/sections/Faq';
import Hero from '../../components/sections/Hero';
import Pricing from '../../components/sections/Pricing';
import ServicesSection from '../../components/sections/ServicesSection';
import Testimonials from '../../components/sections/Testimonials';
import TestimonialSnippet from '../../components/sections/TestimonialSnippet';
import { NavbarContext } from '../../components/navigation/NavbarContext';
import PortfolioSection from '../../components/sections/PortfolioSection';
import { useFirebase } from '../../context/useFirebase';
import { logEvent } from 'firebase/analytics';

const Home: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const { updateSectionRef } = useContext(NavbarContext);
  const { analytics } = useFirebase();

  useEffect(() => {
    updateSectionRef('pricing', pricingRef);
    updateSectionRef('testimonials', testimonialsRef);
    updateSectionRef('about', aboutRef);
    updateSectionRef('faq', faqRef);
    updateSectionRef('portfolio', portfolioRef);

    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: 'Home',
        page_location: window.location.href,
        page_path: window.location.pathname,
      });

      return () => {
        updateSectionRef('pricing', null);
        updateSectionRef('testimonials', null);
        updateSectionRef('about', null);
        updateSectionRef('faq', null);
        updateSectionRef('portfolio', null);
      };
    }
  }, [updateSectionRef, analytics]);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <main className="pt-24">
        <Hero />
        <TestimonialSnippet testimonialsRef={testimonialsRef} />
        <ServicesSection />
        <div ref={portfolioRef}>
          <PortfolioSection />
        </div>
        <div ref={pricingRef} id="pricing-section">
          <Pricing />
        </div>
        <div ref={faqRef}>
          <Faq />
        </div>
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
      </main>
    </div>
  );
};

export default Home;
