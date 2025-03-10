import React, { useRef, useEffect, useContext } from 'react';
import Faq from '../../components/sections/Faq';
import Hero from '../../components/sections/Hero';
import Pricing from '../../components/sections/Pricing';
import ServicesSection from '../../components/sections/ServicesSection';
import Testimonials from '../../components/sections/Testimonials';
import TestimonialSnippet from '../../components/sections/TestimonialSnippet';
import { NavbarContext } from '../../components/navigation/NavbarContext';
import PortfolioSection from '../../components/sections/PortfolioSection';
import { useFirebaseAnalytics } from '../../context/useFirebaseAnalytics';

const Home: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const { updateSectionRef } = useContext(NavbarContext);

  // Use the custom Firebase Analytics hook
  useFirebaseAnalytics();

  useEffect(() => {
    updateSectionRef('pricing', pricingRef);
    updateSectionRef('testimonials', testimonialsRef);
    updateSectionRef('about', aboutRef);
    updateSectionRef('faq', faqRef);
    updateSectionRef('portfolio', portfolioRef);

    return () => {
      updateSectionRef('pricing', null);
      updateSectionRef('testimonials', null);
      updateSectionRef('about', null);
      updateSectionRef('faq', null);
      updateSectionRef('portfolio', null);
    };
  }, [updateSectionRef]);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <main className="pt-24" role="main" aria-label="Main content">
        <Hero />
        <section aria-label="Testimonial Snippet">
          <TestimonialSnippet testimonialsRef={testimonialsRef} />
        </section>
        <section aria-label="Our Services">
          <ServicesSection />
        </section>
        <section ref={portfolioRef} aria-label="Portfolio">
          <PortfolioSection />
        </section>
        <section ref={pricingRef} id="pricing-section" aria-label="Pricing Plans">
          <Pricing />
        </section>
        <section ref={faqRef} aria-label="Frequently Asked Questions">
          <Faq />
        </section>
        <section ref={testimonialsRef} aria-label="Client Testimonials">
          <Testimonials />
        </section>
      </main>
    </div>
  );
};

export default Home;
