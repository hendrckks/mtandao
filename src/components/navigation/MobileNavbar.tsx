import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowDownDashedSquareSolid } from '../icons/ArrowDashed';
import Container from '../Container';
import { NavbarContext } from './NavbarContext';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollToSection } = useContext(NavbarContext);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick =
    (section: 'pricing' | 'testimonials' | 'about' | 'faq') => () => {
      if (location.pathname !== '/') {
        navigate('/', { state: { fromSection: section } });
      } else {
        scrollToSection(section);
      }
      setIsOpen(false);
    };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-10 right-0 z-50 rounded-md bg-transparent w-full text-black md:hidden"
    >
      <Container className="px-4">
        <div
          onClick={toggleNavbar}
          className="flex justify-between bg-[#f2f2f2] rounded-md w-full items-center shadow-sm p-4"
        >
          <div className="text-xl font-semibold">Threefold</div>
          <button className="p-2">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowDownDashedSquareSolid className="w-6 h-6" />
            </motion.div>
          </button>
        </div>
      </Container>
      <Container className="px-4">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f2f2f2] mt-[-2px] w-full overflow-hidden rounded-b-md shadow-md"
            >
              <div className="py-4 text-base px-6 space-y-4">
                <Link to="/" className="block" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                {!isHomePage && (
                  <button
                    className="block w-full text-left"
                    onClick={handleSectionClick('about')}
                  >
                    About
                  </button>
                )}
                <Link
                  to="/services"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/portfolio"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
                {!isHomePage && (
                  <button
                    className="block w-full text-left"
                    onClick={handleSectionClick('pricing')}
                  >
                    Pricing
                  </button>
                )}
                {!isHomePage && (
                  <button
                    className="block w-full text-left"
                    onClick={handleSectionClick('faq')}
                  >
                    FAQs
                  </button>
                )}
                <Link
                  to="/contact-us"
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="p-4 flex-col space-y-2">
                {!isHomePage && (
                  <button
                    className="w-full py-2 bg-black text-white rounded-lg"
                    onClick={handleSectionClick('testimonials')}
                  >
                    See Testimonials
                  </button>
                )}
                {!isHomePage && (
                  <button
                    className="w-full py-2 bg-black text-white rounded-lg"
                    onClick={handleSectionClick('pricing')}
                  >
                    See Plans & Pricing
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
