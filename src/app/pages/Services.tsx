import React, { useContext } from 'react';
import Container from '../../components/Container';
import FlexibleBadge from '../../components/TitleBadge';
import ServiceCard from '../../components/ServicesCard';
import { ArrowrRight } from '../../components/icons/ArrowRight';
import { NavbarContext } from '../../components/navigation/NavbarContext';

const servicesData = [
  {
    title: 'Brand development',
    description:
      ' Our team is commited to provide comprehensive suite of creative services aimed at helping businesses develop their brand identity and marketing materials.',
    features: [
      'Corporate visuals(premium photography and videography)',
      'Premium logo designs',
      'Mockups',
      'Brand guidelines & copy',
      'Typography',
      'Product positioning',
      'Brand color schemes',
      'landing page and Website design',
    ],
    images: [
      '/landing pages/nova4.jpg',
      '/landing pages/branding1.webp',
      '/landing pages/branding2.webp',
      '/landing pages/branding3.webp',
      '/landing pages/nova3.jpg',
      '/landing pages/nova4.jpg',
    ],
  },
  {
    title: 'Website Development',
    description:
      'We build high-converting websites ( using the brand guidelines ) that help you stand out in the global market and increase revenue.',
    features: [
      'Built by React and firebase',
      'Responsive websites',
      'Full-stack development',
      'API integration',
      'Performance optimization',
      'Ongoing support',
      'Automations intergrations',
    ],
    images: [
      '/web design/60.avif',
      '/web design/61.avif',
      '/web design/62.avif',
      '/web design/63.avif',
      '/web design/64.avif',
      '/web design/65.avif',
    ],
  },
  {
    title: 'E-commerce Solutions',
    description:
      'We build powerful e-commerce platforms to help you sell products and services online effectively. Our team is Determined to build the most user experience oriented websites',
    features: [
      'Custom E-commerce websites',
      'Shopping cart integration',
      'Payment gateway setup',
      'Inventory management',
      'Order tracking',
      'Analytics and reporting',
      'Ongoing support',
    ],
    images: [
      '/commerce/cv.webp',
      '/commerce/xc.webp',
      '/commerce/xd.jpg',
      '/commerce/xf.webp',
      '/commerce/xg.webp',
      '/commerce/xz.webp',
    ],
  },
];

const Services: React.FC = () => {
  const { scrollToSection } = useContext(NavbarContext);

  const handleViewProjectsClick = () => {
    scrollToSection('portfolio');
  };
  return (
    <div className="min-h-[100vh] w-full bg-white font-medium">
      <Container className="flex-col items-start md:px-4 lg:px-0 px-4 py-48 text-black">
        <div className="mb-5">
          <h1>
            <FlexibleBadge
              text="Our Services"
              iconClassName="hidden"
              textClassName="text-[#787878] text-sm"
              className="bg-[#f2f2f2]"
            />
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mt-4">
            What we do
          </h2>
          <p className="mt-4 text-sm">
            Our lean team specializes in brand development, Web design and{' '}
            <br />
            development services.
          </p>
          <div className="flex items-center cursor-pointer">
            <FlexibleBadge
              onClick={handleViewProjectsClick}
              text="View Projects"
              iconClassName="text-base text-black"
              icon={ArrowrRight}
              className="bg-[#f3f3f3] rounded-md transition-colors duration-75 p-3 mt-14"
              textClassName="text-[#0d0d0d]"
            />
          </div>
        </div>
        <div className="flex-col md:mt-10 mt:0 py-10 space-y-5">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              images={service.images}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
