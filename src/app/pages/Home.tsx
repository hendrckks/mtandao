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
  const localPricingRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const { updatePricingRef } = useContext(NavbarContext);

  useEffect(() => {
    updatePricingRef(localPricingRef);
    return () => {
      updatePricingRef(null); // Cleanup when component unmounts
    };
  }, [updatePricingRef]);

  return (
    <div className="min-h-[200vh] w-full bg-white">
      <main className="pt-24">
        <Hero />
        <TestimonialSnippet testimonialsRef={testimonialsRef} />
        <ServicesSection />
        <div ref={localPricingRef} id="pricing-section">
          <Pricing />
        </div>
        <AboutUs />
        <Faq />
        <div ref={testimonialsRef}>
          <Testimonials />
        </div>
      </main>
    </div>
  );
};

export default Home;
