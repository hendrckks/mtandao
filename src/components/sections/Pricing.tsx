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
      <h3 className="text-3xl text-[#b4b3b1] py-2 md:py-2">
        Select the quarterly payment plan <br />
        to get a<span className="text-black"> 10% discount</span>
      </h3>
      <div className="flex items-center justify-center py-8">
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

// Pricing Plans Data
const pricingPlans: Array<
  Omit<PricingCardProps, 'price' | 'isQuarterly'> & { price: number }
> = [
  {
    title: 'Repras standard',
    price: 3595,
    description: 'One request at a time. Pause or cancel anytime.',
    icon: <GraphArrowIncreaseSolid className="text-black" />,
    features: [
      { text: 'Full-service creative (no development).', included: true },
      { text: 'Corporate visuals', included: true },
      { text: 'Weekly consulting call', included: true },
      { text: 'Unlimited Iterations.', included: true },
      { text: 'Slack Communication.', included: true },
      { text: 'Pause or cancel anytime.', included: true },
    ],
    monthlylink:
      'https://f2d5d0-7d.myshopify.com/cart/48653450805441:1?channel=buy_button',
    quaterlylink:
      'https://f2d5d0-7d.myshopify.com/cart/48653460504769:1?channel=buy_button',
  },
  {
    title: 'Prix fixe',
    price: 6000,
    description: 'Double requests at a time. Pause or cancel anytime.',
    icon: <Rocket className="text-black" />,
    features: [
      { text: 'Full-service creative + development.', included: true },
      { text: 'Weekly consulting calls.', included: true },
      { text: 'Updates every 2 days.', included: true },
      { text: 'Everything included.', included: true },
      { text: 'Scale with your needs', included: true },
      { text: 'Pause or cancel anytime.', included: true },
    ],
    monthlylink:
      'https://f2d5d0-7d.myshopify.com/cart/48653451657409:1?channel=buy_button',
    quaterlylink:
      'https://f2d5d0-7d.myshopify.com/cart/48653453918401:1?channel=buy_button',
  },
];

// Additional Options Data
const additionalOptions: Array<AdditionalOptionProps> = [
  {
    backgroundColor: 'black',
    icon: (
      <div className="bg-[#b8ff45] p-4 rounded-lg">
        <ArrowCursor2 className="text-[#131211] w-6 h-6" />
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
        <ToggleOutline className="text-[#131211] w-6 h-6" />
      </div>
    ),
    title: 'Custom Request?',
    description:
      'Have a question about pricing?Book a call and we will help you settle it.',
    buttonText: 'Book a 15 min call with us',
    buttonLink: 'https://cal.com/devcook/devcook-intro',
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
      <Container className="flex-col lg:px-0 md:px-4 px-4">
        <div className="py-12 flex flex-col md:items-center items-start w-full">
          <div className="bg-black flex w-fit text-sm mb-6 items-center justify-center gap-2 rounded-full">
            <FlexibleBadge text="Pricing" />
          </div>
          <div className="text-black mt-4 md:text-center mb-8">
            <p className="lg:text-4xl text-3xl font-semibold">
              Transactions made simple.
            </p>
            <p className="text-[#131211] text-2xl mt-6">
              No contracts. No headaches.
              <br />
              <span className="text-[#b4b3b1]">On demand, full-service</span>
              <br />
              <span className="text-[#b4b3b1]">
                creative without the bullshit.
              </span>
            </p>
          </div>
          <div className="text-[#131211] text-base font-normal mb-12">
            <p className="py-4">
              We've developed different monthly pricing options for you and your
              business needs.
            </p>
          </div>
          <PriceToggle isQuarterly={isQuarterly} onToggle={togglePricing} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="mt-10 text-[#b4b3b1] w-full text-center">
            <p className="text-sm">
              Feel free to cancel or pause the subscription.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
