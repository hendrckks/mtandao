import React from 'react';
import Container from '../Container';
import { motion } from 'framer-motion';
import FlexibleBadge from '../TitleBadge';
import { Wrench } from '../icons/Wrench';
import { ArrowCursor2 } from '../icons/Navigater';
import { Comments } from '../icons/Comment';
import { Diamond } from '../icons/Diamond';
import { ArrowRoundRight } from '../icons/ArrowRoundRight';
import { Ticktick } from '../icons/Tick';
import { Rocket } from '../icons/Rocket';
import { GraphArrowIncreaseSolid } from '../icons/KickStater';
import { MacCommand } from '../icons/Services1';
import { X } from '../icons/Twitter';
import { Users } from '../icons/Users';
import { Link } from 'react-router-dom';

const topServices = [
  { text: 'Webflow experts', icon: Rocket },
  { text: 'Branding', icon: Ticktick },
  { icon: ArrowRoundRight },
  { text: 'Web developers', icon: ArrowCursor2 },
  { text: 'Landing pages', icon: Comments },
  { text: 'Framer development', icon: Diamond },
  { text: 'Webflow experts', icon: Rocket },
  { text: 'Branding', icon: Ticktick },
  { icon: ArrowRoundRight },
  { text: 'Web developers', icon: ArrowCursor2 },
  { text: 'Landing pages', icon: Comments },
  { text: 'Framer development', icon: Diamond },
];

const bottomServices = [
  { text: 'Innovative solutions', icon: Users },
  { text: 'Strategic planning', icon: GraphArrowIncreaseSolid },
  { text: 'Problem solving', icon: MacCommand },
  { text: 'Data analytics', icon: X },
  { text: 'Cybersecurity', icon: Wrench },
  { text: 'Cloud services', icon: ArrowCursor2 },
  { text: 'Innovative solutions', icon: Users },
  { text: 'Strategic planning', icon: GraphArrowIncreaseSolid },
  { text: 'Problem solving', icon: MacCommand },
  { text: 'Data analytics', icon: X },
  { text: 'Cybersecurity', icon: Wrench },
  { text: 'Cloud services', icon: ArrowCursor2 },
];

const ServicesSection: React.FC = () => {
  const topServicesWidth = topServices.length * 250;
  const bottomServicesWidth = bottomServices.length * 250;

  return (
    <div className="w-full py-16 bg-white text-black">
      <Container className="flex-col items-center w-full md:w-[30vw] relative">
        <div className="absolute top-0 left-0 h-full md:w-20 w-10 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full md:w-20 w-10 bg-gradient-to-l from-white to-transparent z-10"></div>
        <FlexibleBadge icon={Wrench} text="Our services" />
        <h2 className="text-4xl font-medium mt-4 mb-2">Well, we do a lot.</h2>
        <p className="text-base text-center md:w-full w-3/4 mt-4">
          Web design? web development? or a single landing page?
          <br />
          We got you covered.
        </p>
        <div className="w-full mt-8 py-2 overflow-hidden">
          <motion.div
            className="flex space-x-4"
            animate={{ x: [`0%`, `-${topServicesWidth}px`] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {[...topServices, ...topServices].map((service, index) => (
              <div
                key={index}
                className="flex text-base gap-2 items-center justify-center bg-gray-100 rounded-full p-4 whitespace-nowrap"
                style={{
                  minWidth: service.text ? 'auto' : '48px',
                  height: '48px',
                }}
              >
                <service.icon className={service.text ? '' : 'w-6 h-6'} />
                {service.text && <span>{service.text}</span>}
              </div>
            ))}
          </motion.div>
        </div>
        <div className="w-full overflow-hidden mt-4">
          <motion.div
            className="flex space-x-4"
            animate={{ x: [`-${bottomServicesWidth}px`, `0%`] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {[...bottomServices, ...bottomServices].map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-base bg-gray-100 rounded-full p-4 whitespace-nowrap"
                style={{
                  minWidth: service.text ? 'auto' : '48px',
                  height: '48px',
                }}
              >
                <service.icon
                  className={`text-base text-blue-400 ${
                    service.text ? '' : 'w-6 h-6'
                  }`}
                />
                {service.text && <span>{service.text}</span>}
              </div>
            ))}
          </motion.div>
        </div>
        <Link to="/services">
          <FlexibleBadge
            text="Learn more"
            iconClassName="hidden"
            className="mt-20"
          />
        </Link>
      </Container>
    </div>
  );
};

export default ServicesSection;
