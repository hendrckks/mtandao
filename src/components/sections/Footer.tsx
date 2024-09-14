import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import FlexibleBadge from '../TitleBadge';
import { NavbarContext } from '../navigation/NavbarContext';

const Footer: React.FC = () => {
  const { scrollToSection } = useContext(NavbarContext);

  const handleSectionClick =
    (section: 'pricing' | 'testimonials' | 'about' | 'faq') => () => {
      scrollToSection(section);
    };

  return (
    <div className="bg-black w-full py-12 h-[50vh]">
      <Container className="text-white flex-col">
        <div>
          <h2 className="text-xl">Devcook</h2>
        </div>
        <div className="py-14">
          <Container>
            <ul className="md:space-x-10 space-x-4 flex  items-center text-sm md:text-base">
              <button onClick={handleSectionClick('about')}>
                <li>About</li>
              </button>
              <button onClick={handleSectionClick('testimonials')}>
                <li>Testimonials</li>
              </button>
              <Link to="/potfolio">
                <li>Portfolio</li>
              </Link>
              <button onClick={handleSectionClick('pricing')}>
                <li>Pricing</li>
              </button>
              <Link to="/contact-us">
                <li>Contact</li>
              </Link>
            </ul>
          </Container>
        </div>
        <div className="flex items-center space-x-4 text-[#f2f2f2] text-sm">
          <span>Privacy policy</span>
          <span>Terms of service</span>
        </div>
        <div className="py-14 space-x-4 flex items-center">
          <Link to="/contact-us">
            <FlexibleBadge
              text="Work with us"
              iconClassName="hidden"
              textClassName="text-black"
              className="p-3 bg-white cursor-pointer"
            />
          </Link>
          <FlexibleBadge
            text="See testimonials"
            iconClassName="hidden"
            textClassName="text-black"
            className="p-3 bg-white cursor-pointer"
            onClick={handleSectionClick('testimonials')}
          />
        </div>
        <p className="text-sm text-[#b4b3b1]">Built by @Tetenga.</p>
      </Container>
    </div>
  );
};

export default Footer;
