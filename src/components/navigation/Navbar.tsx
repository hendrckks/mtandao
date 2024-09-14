import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../Container';
import Home2 from '../icons/Home2';
import { MacCommand } from '../icons/Services1';
import { Phone } from '../icons/Contact';
import { IbmCloudProjects } from '../icons/Portfolio';
import TooltipLink from './TooltipLink';
import CtaButton from '../CtaButton';
import { NavbarContext } from './NavbarContext';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  const { scrollToPricing } = useContext(NavbarContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handlePricingClick = () => {
    scrollToPricing();
  };

  if (isMobile) {
    return <MobileNavbar />;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <Container>
        <div className="flex mt-6 justify-between items-center bg-[#f2f2f2] rounded-full w-full mx-auto p-[6px]">
          <div className="text-xl p-4 font-semibold text-black">Sixfold</div>
          <div className="flex bg-black rounded-full p-[6px] items-center">
            <TooltipLink to="/" icon={Home2} tooltip="Home" />
            <TooltipLink to="/services" icon={MacCommand} tooltip="Services" />
            <TooltipLink
              to="/portfolio"
              icon={IbmCloudProjects}
              tooltip="Portfolio"
            />
            <TooltipLink to="/contact-us" icon={Phone} tooltip="Contact" />
          </div>
          <CtaButton className="mr-[12px]" onClick={handlePricingClick}>
            Our Pricing
          </CtaButton>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
