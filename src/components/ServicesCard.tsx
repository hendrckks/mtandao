// src/components/ServiceCard.tsx
import React, { useContext } from 'react';
import FlexibleBadge from './TitleBadge';
import { Ticktick } from './icons/Tick';
import { Link } from 'react-router-dom';
import { NavbarContext } from './navigation/NavbarContext';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  images: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  images,
}) => {
  const { scrollToSection } = useContext(NavbarContext);

  const handleSectionClick =
    (section: 'pricing' | 'testimonials' | 'about' | 'faq') => () => {
      scrollToSection(section);
    };
  return (
    <div className="bg-[#f2f2f2] md:min-w-[1200px] flex-row md:flex rounded-md shadow-md p-5">
      <div>
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-sm w-auto md:w-[438px] mb-4">{description}</p>
        <ul className="mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-3 mt-5 text-sm items-center">
              <Ticktick />
              <div className="">{feature}</div>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3 mt-5">
          <Link to="/contact-us">
            <FlexibleBadge
              text="Book a call"
              iconClassName="hidden"
              textClassName="text-[#787878] group-hover:text-[#0d0d0d] cursor-pointer text-sm"
              className="bg-[#e8e8e8]  border border-[#f0f0f0] transition-colors rounded-md duration-200"
            />
          </Link>

          <FlexibleBadge
            onClick={handleSectionClick('pricing')}
            text="Work with us"
            iconClassName="hidden"
            textClassName="text-[#787878] group-hover:text-[#0d0d0d] text-sm"
            className="bg-[#e8e8e8] group border border-[#f0f0f0] cursor-pointer rounded-md transition-colors duration-200"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-5 gap-3 h-full w-full">
        {images.slice(0, 6).map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt="service image"
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
