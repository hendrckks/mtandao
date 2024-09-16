import React from 'react';
import Container from '../../components/Container';
import FlexibleBadge from '../../components/TitleBadge';
import ServiceCard from '../../components/ServicesCard';
import { ArrowrRight } from '../../components/icons/ArrowRight';

const servicesData = [
  {
    title: 'Website Development',
    description:
      'We design high-converting websites that help you stand out in the global market and increase revenue.',
    features: [
      'Custom web applications',
      'Built by React',
      'Frontend development',
      'Backend development',
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
    title: 'Landing Pages',
    description:
      ' We Leverage lastest technologies to create landing pages that captivate and most importantly, convert.',
    features: [
      'High-converting website',
      'Multi page',
      'Built by React',
      'Website copy included',
      'Responsive design',
      'SEO optimization',
      'Hosting assistance Coverage',
    ],
    images: [
      '/landing pages/qw.avif',
      '/landing pages/we.avif',
      '/landing pages/er.avif',
      '/landing pages/rt.avif',
      '/landing pages/ty.avif',
      '/landing pages/yu.avif',
    ],
  },
  {
    title: 'E-commerce Solutions',
    description:
      'We build powerful e-commerce platforms to help you sell products and services online effectively.',
    features: [
      'Custom E-commerce websites',
      'Shopping cart integration',
      'Payment gateway setup',
      'Inventory management',
      'Order tracking',
      'Analytics and reporting',
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
  return (
    <div className="min-h-[100vh] w-full bg-white">
      <Container className="flex-col items-start md:px-4 lg:px-0 px-4 py-48 text-black">
        <div className="mb-5">
          <FlexibleBadge
            text="Our Services"
            iconClassName="hidden"
            textClassName="text-[#787878] text-sm"
            className="bg-[#f2f2f2]"
          />
          <h2 className="text-5xl font-semibold mt-4">What we do</h2>
          <p className="mt-4">
            Our lean team specializes in Web design and <br />
            development services.
          </p>
          <div className="flex items-center cursor-pointer">
            <FlexibleBadge
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
