import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../Container';
import FlexibleBadge from '../TitleBadge';
import { GraphArrowIncreaseSolid } from '../icons/KickStater';
import { Rocket } from '../icons/Rocket';
import { ArrowCursor2 } from '../icons/Navigater';
import { ToggleOutline } from '../icons/Toogles';
import PricingCard, { PricingCardProps } from '../pricing/PricingCard';
import AdditionalOption, { AdditionalOptionProps } from '../pricing/PricingCta';

// PriceToggle Component
interface PriceToggleProps {
  isQuarterly: boolean;
  onToggle: () => void;
}

const PriceToggle: React.FC<PriceToggleProps> = ({ isQuarterly, onToggle }) => {
  return (
    <div className="mb-8 flex-col text-center">
      <h3 className="text-3xl text-[#b4b3b1] py-2 md:py-10">
        Select the quarterly payment plan <br />
        to get a<span className="text-black"> 10% discount</span>
      </h3>
      <div className="flex items-center justify-center mb-8">
        <span
          className={`mr-2 ${
            isQuarterly ? 'text-gray-500' : ' text-black'
          } font-semibold`}
        >
          Monthly
        </span>
        <motion.div
          className={`w-14 h-8 shadow-md text-[#b8ff45] rounded-full p-1 cursor-pointer ${
            isQuarterly ? 'bg-black' : ' bg-gray-300'
          }`}
          onClick={onToggle}
        >
          <motion.div
            className="w-6 h-6 bg-white rounded-full shadow-md"
            animate={{ x: isQuarterly ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
        <span
          className={`ml-2 font-semibold ${
            isQuarterly ? 'text-black' : 'text-gray-500'
          }`}
        >
          Quarterly
        </span>
      </div>
    </div>
  );
};

// AnimatedPrice Component
interface AnimatedPriceProps {
  price: number;
  isQuarterly: boolean;
}

const AnimatedPrice: React.FC<AnimatedPriceProps> = ({
  price,
  isQuarterly,
}) => {
  const [displayPrice, setDisplayPrice] = useState<number>(price);

  useEffect(() => {
    const targetPrice = isQuarterly ? price * 0.9 : price;
    const duration = 700;
    const steps = 40;
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const currentPrice =
        displayPrice + (targetPrice - displayPrice) * progress;
      setDisplayPrice(Math.round(currentPrice));

      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [price, isQuarterly, displayPrice]);

  return <span>{displayPrice.toLocaleString()}</span>;
};

// PricingCard Component
// AdditionalOption Component

// Pricing Plans Data
const pricingPlans: Array<
  Omit<PricingCardProps, 'price' | 'isQuarterly'> & { price: number }
> = [
  {
    title: 'Kickstarter',
    price: 2595,
    description: 'One request at a time. Pause or cancel anytime.',
    icon: <GraphArrowIncreaseSolid className="text-black" />,
    features: [
      { text: 'Unlimited Stock Photos', included: true },
      { text: 'Average 96 hour delivery', included: true },
      { text: 'Unlimited Iterations.', included: true },
      { text: 'Slack Communication.', included: true },
      { text: 'Pause or cancel anytime.', included: true },
      { text: 'Full Stack Design (no development)', included: true },
    ],
  },
  {
    title: 'Pro',
    price: 3995,
    description: 'Double requests at a time. Pause or cancel anytime.',
    icon: <Rocket className="text-black" />,
    features: [
      { text: 'Unlimited Stock Photos.', included: true },
      { text: 'Updates every day.', included: true },
      { text: 'Pause or cancel anytime.', included: true },
      { text: 'Unlimited iterations.', included: true },
      { text: 'Slack communication.', included: true },
      { text: 'Full stack design + development', included: true },
    ],
  },
];

// Additional Options Data
const additionalOptions: Array<AdditionalOptionProps> = [
  {
    backgroundColor: 'black',
    icon: (
      <div className="bg-[#b8ff45] p-4 rounded-lg">
        <ArrowCursor2 className="text-black w-6 h-6" />
      </div>
    ),
    title: 'Redesign your Hero section.',
    description:
      'Redesign your hero section to something that actually converts and aesthetically pleases. Look at it as, ahh a facelift but for websites.Lol',
    buttonText: 'Inquire',
    buttonLink: '/contact-us',
  },
  {
    backgroundColor: 'white',
    icon: (
      <div className="bg-[#b8ff45] p-4 rounded-lg">
        <ToggleOutline className="text-black w-6 h-6" />
      </div>
    ),
    title: 'Custom Request?',
    description:
      'Have a question about pricing?Book a call and we will help you settle it.',
    buttonText: 'Book a 15 min call with us',
    buttonLink: 'https://cal.com/samuel-tetenga/devcook-intro-call',
  },
];

// Main Pricing Component
export default function Pricing() {
  const [isQuarterly, setIsQuarterly] = useState<boolean>(false);

  const togglePricing = () => {
    setIsQuarterly(!isQuarterly);
  };

  return (
    <div className="bg-gradient-to-r from-[#f2f2f2] to-white">
      <Container className="flex-col md:px-0 px-4 items-start">
        <div className="py-12 flex flex-col w-full">
          <div className="bg-black flex w-fit text-sm mb-6 items-center justify-center gap-2 rounded-full px-4 py-2">
            <FlexibleBadge text="Pricing" />
          </div>
          <div className="text-black mb-8">
            <p className="text-4xl font-semibold">Transactions made simple.</p>
            <p className="text-black text-3xl mt-6">
              No contracts. No headaches.
              <br />
              <span className="text-[#b4b3b1]">On demand, full-service</span>
              <br />
              <span className="text-[#b4b3b1]">
                creative without the bullshit.
              </span>
            </p>
          </div>
          <div className="text-black text-base font-normal mb-12">
            <p className="py-4">
              We've developed different monthly pricing options for you and your
              business needs.
              <br />
              <br /> Feel free to cancel or pause the subscription.
            </p>
          </div>
          <PriceToggle isQuarterly={isQuarterly} onToggle={togglePricing} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                price={
                  <AnimatedPrice price={plan.price} isQuarterly={isQuarterly} />
                }
                isQuarterly={isQuarterly}
              />
            ))}
            <div className="flex flex-col gap-6">
              {additionalOptions.map((option, index) => (
                <AdditionalOption key={index} {...option} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
