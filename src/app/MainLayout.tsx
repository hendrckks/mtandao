import React, { useState, useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from '../components/sections/Footer';
import Navbar from '../components/navigation/Navbar';
import { NavbarContext } from '../components/navigation/NavbarContext';
import MobileNavbar from '../components/navigation/MobileNavbar';

const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname.split('/')[1]} // Only animate on main route changes
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
  const [sectionRefs, setSectionRefs] = useState<{
    [key in
      | 'pricing'
      | 'testimonials'
      | 'about'
      | 'faq'
      | 'portfolio']: React.RefObject<HTMLDivElement> | null;
  }>({
    pricing: null,
    testimonials: null,
    about: null,
    faq: null,
    portfolio: null,
  });

  const [shouldPerformSecondaryClick, setShouldPerformSecondaryClick] =
    useState(false);
  const [targetSection, setTargetSection] = useState<
    'pricing' | 'testimonials' | 'about' | 'faq' | null
  >(null);
  const location = useLocation();
  const navigate = useNavigate();

  const updateSectionRef = useCallback(
    (
      section: 'pricing' | 'testimonials' | 'about' | 'faq' | 'portfolio',
      ref: React.RefObject<HTMLDivElement> | null
    ) => {
      setSectionRefs((prev) => ({ ...prev, [section]: ref }));
    },
    []
  );

  const scrollToSection = useCallback(
    (section: 'pricing' | 'testimonials' | 'about' | 'faq' | 'portfolio') => {
      if (location.pathname !== '/') {
        navigate('/', { state: { fromSection: section } });
      } else if (sectionRefs[section] && sectionRefs[section]?.current) {
        const yOffset = -80;
        const y =
          sectionRefs[section]?.current?.getBoundingClientRect().top! +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    },
    [location.pathname, navigate, sectionRefs]
  );
  useEffect(() => {
    const handlePopState = () => {
      // Force a re-render when the user navigates with browser buttons
      setShouldPerformSecondaryClick((prev) => !prev);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (
      location.pathname === '/' &&
      location.state &&
      (location.state as any).fromSection
    ) {
      setTargetSection((location.state as any).fromSection);
      setShouldPerformSecondaryClick(true);
    }
  }, [location]);

  useEffect(() => {
    if (shouldPerformSecondaryClick && targetSection) {
      setTimeout(() => {
        scrollToSection(targetSection);
        setShouldPerformSecondaryClick(false);
        setTargetSection(null);
        // Clear the location state
        window.history.replaceState({}, document.title);
      }, 100); // Small delay to ensure the page has rendered
    }
  }, [shouldPerformSecondaryClick, targetSection, scrollToSection]);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    // Force a re-render after a short delay
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [location.pathname]);

  return (
    <div>
      <NavbarContext.Provider
        value={{
          sectionRefs,
          updateSectionRef,
          scrollToSection,
          shouldPerformSecondaryClick,
          setShouldPerformSecondaryClick,
        }}
      >
        <Navbar />
        <MobileNavbar />
        <main>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
      </NavbarContext.Provider>
    </div>
  );
};

export default MainLayout;
