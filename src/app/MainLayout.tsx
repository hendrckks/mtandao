import React, { useState, useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/sections/Footer';
import Navbar from '../components/navigation/Navbar';
import { NavbarContext } from '../components/navigation/NavbarContext';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const MainLayout: React.FC = () => {
  const [pricingRef, setPricingRef] =
    useState<React.RefObject<HTMLDivElement> | null>(null);
  const [shouldPerformSecondaryClick, setShouldPerformSecondaryClick] =
    useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const updatePricingRef = useCallback(
    (ref: React.RefObject<HTMLDivElement> | null) => {
      setPricingRef(ref);
    },
    []
  );

  const scrollToPricing = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/', { state: { fromPricingButton: true } });
    } else if (pricingRef && pricingRef.current) {
      const yOffset = -80; // Adjust this value to account for any fixed headers
      const y =
        pricingRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [location.pathname, navigate, pricingRef]);

  useEffect(() => {
    if (
      location.pathname === '/' &&
      location.state &&
      (location.state as any).fromPricingButton
    ) {
      setShouldPerformSecondaryClick(true);
    }
  }, [location]);

  useEffect(() => {
    if (shouldPerformSecondaryClick) {
      // Simulate a click on the pricing button
      setTimeout(() => {
        scrollToPricing();
        setShouldPerformSecondaryClick(false);
      }, 100); // Small delay to ensure the page has rendered
    }
  }, [shouldPerformSecondaryClick, scrollToPricing]);

  return (
    <NavbarContext.Provider
      value={{
        pricingRef,
        updatePricingRef,
        scrollToPricing,
        shouldPerformSecondaryClick,
        setShouldPerformSecondaryClick,
      }}
    >
      <Navbar />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </NavbarContext.Provider>
  );
};

export default MainLayout;
