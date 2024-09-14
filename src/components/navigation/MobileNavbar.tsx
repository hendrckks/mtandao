import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDownDashedSquareSolid } from '../icons/ArrowDashed';
import Container from '../Container';

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-10 right-0 z-50 rounded-md bg-transparent w-full text-black">
      <Container className="px-4">
        <div
          onClick={toggleNavbar}
          className="flex justify-between bg-[#f2f2f2] rounded-md w-full items-center shadow-sm p-4"
        >
          <div className="text-xl font-semibold">Mtandao</div>
          <button onClick={toggleNavbar} className="p-2">
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
                <Link to="/" className="block" onClick={toggleNavbar}>
                  Home
                </Link>
                <Link to="/services" className="block " onClick={toggleNavbar}>
                  Services
                </Link>
                <Link to="/portfolio" className="block " onClick={toggleNavbar}>
                  Portfolio
                </Link>
                <Link to="/pricing" className="block" onClick={toggleNavbar}>
                  Pricing
                </Link>
                <Link to="/faqs" className="block " onClick={toggleNavbar}>
                  FAQs
                </Link>
                <Link to="/blog" className="block" onClick={toggleNavbar}>
                  Blog
                </Link>
                <Link to="/contact-us" className="block" onClick={toggleNavbar}>
                  Contact
                </Link>
              </div>
              <div className="p-4 flex space-x-2">
                <button className="w-full py-2 bg-black text-white rounded-full">
                  <Link to="/contact-us">Book a call</Link>
                </button>
                <button className="w-full py-2 bg-black text-white rounded-full">
                  See pricing
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </nav>
  );
};

export default MobileNavbar;
