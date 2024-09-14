import React from 'react';
import Container from '../Container';
import { Users } from '../icons/Users';
import FlexibleBadge from '../TitleBadge';
import TeamMember from '../TeamMembers';

const teamMembers = [
  {
    image: '/testimonials/testimonial1.webp',
    name: 'Leo Martins',
    role: 'Lead Web Designer',
    bio: 'Leo is the mastermind behind flawless, intuitive interfaces. Leo makes sure every website is accessible to all users.',
    link: 'https://x.com/home',
  },
  {
    image: '/testimonials/testimonial2.webp',
    name: 'Dan Harris',
    role: 'Webflow Expert',
    bio: 'Dan is the architect behind seamless, dynamic websites. With Webflow prowess, every digital product is a masterpiece.',
    link: 'https://x.com/home',
  },
  {
    image: '/testimonials/testimonial5.webp',
    name: 'Adam David',
    role: 'Framer Developer',
    bio: 'Adam takes care of everything related to Framer. He designs and develops full functional websites in multiple niches.',
    link: 'https://x.com/home',
  },
  {
    image: '/testimonials/testimonial3.webp',
    name: 'Sarah Mendes',
    role: 'Branding',
    bio: 'Sarah takes care of the logo identity and branding part. She has a keen eye for business strategy and visual success.',
    link: 'https://x.com/home',
  },
  {
    image: '/testimonials/testimonial4.webp',
    name: 'Mark Berg',
    role: 'Founder, CEO',
    bio: 'The man behind the team, Mark founded Sixfold when he was a freelancer and now manages a team of design experts.',
    link: 'https://x.com/home',
  },
  {
    image: '/testimonials/testimonial5.webp',
    name: 'Mia Ellswort',
    role: 'Motion Designer',
    bio: 'Mia makes the pixels move! Her elegant style and motion design expertise gives an amazing final vibe to the projects.',
    link: 'https://x.com/home',
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="w-full bg-white py-20">
      <Container className="flex-col md:px-0 px-4 text-black items-start">
        <div className="flex flex-col md:flex-row w-full mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <FlexibleBadge icon={Users} text="About us" />
            <h3 className="py-4 text-4xl font-semibold">
              Meet the Mtandao Team
            </h3>
            <p className="text-lg font-medium">Your Development Partners</p>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base">
              We're a dynamic team of digital creatives passionate about
              crafting exceptional user experiences. Combining the power of
              React frameworks, Figma's design capabilities, and strategic
              branding, we bring your vision to life.
              <br />
              <br />
              From concept to execution, we're dedicated to delivering
              innovative, visually stunning, and functionally robust solutions.
              Whether you need a complex web application or a captivating brand
              identity, our expertise and commitment to excellence will ensure
              your project stands out.
            </p>
          </div>
        </div>
      </Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-36 px-4 mt-20 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
