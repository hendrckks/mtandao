import React, { useRef, useEffect, useContext } from 'react';
import AboutUs from '../../components/sections/AboutUs';
import Faq from '../../components/sections/Faq';
import Hero from '../../components/sections/Hero';
import Pricing from '../../components/sections/Pricing';
import ServicesSection from '../../components/sections/ServicesSection';
import Testimonials from '../../components/sections/Testimonials';
import TestimonialSnippet from '../../components/sections/TestimonialSnippet';
import { NavbarContext } from '../../components/navigation/NavbarContext';

const Home: React.FC = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const { updateSectionRef } = useContext(NavbarContext);

  useEffect(() => {
    updateSectionRef('pricing', pricingRef);
    updateSectionRef('testimonials', testimonialsRef);
    updateSectionRef('about', aboutRef);
    updateSectionRef('faq', faqRef);
    return () => {
      updateSectionRef('pricing', null);
      updateSectionRef('testimonials', null);
      updateSectionRef('about', null);
      updateSectionRef('faq', null);
    };
  }, [updateSectionRef]);

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <main className="pt-24">
        <Hero />
        <TestimonialSnippet testimonialsRef={testimonialsRef} />
        <ServicesSection />
        <div ref={pricingRef} id="pricing-section">
          <Pricing />
        </div>
        <div ref={aboutRef}>
          <AboutUs />
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
