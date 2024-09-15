import React from 'react';
import { Ticktick } from '../icons/Tick';
import { X } from '../icons/X';
import { Link } from 'react-router-dom';

interface Feature {
  text: string;
  included: boolean;
}

export interface PricingCardProps {
  title: string;
  price: React.ReactNode;
  description: string;
  features: Feature[];
  icon: React.ReactNode;
  isQuarterly: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon,
}) => {
  // Format the price if it's a number, otherwise use it as is
  const formattedPrice =
    typeof price === 'number' ? price.toLocaleString('en-US') : price;

  return (
    <div className="bg-white text-black rounded-3xl shadow-lg p-8 flex flex-col h-full">
      <div className="items-center flex mb-4">
        <div className="bg-[#b8ff45] h-12 w-12 flex items-center justify-center rounded-full mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-black">{title}</h3>
      </div>
      <p className="text-[42px] font-medium mt-4 flex items-center mb-2">
        $<span>{formattedPrice}</span>/
        <span className="text-2xl font-semibold">m</span>
      </p>
      <p className="text-sm py-6">{description}</p>
      <ul className="flex-grow mb-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex md:text-base text-sm items-center py-2"
          >
            <span className="mr-4">
              {feature.included ? (
                <Ticktick className="text-black w-4 h-4" />
              ) : (
                <X className="text-gray-400 w-4 h-4" />
              )}
            </span>
            <span className={feature.included ? 'text-black' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex-col text-center">
        <button className="mt-4 bg-black text-white text-sm py-2 px-4 rounded-lg transition-colors">
          0 / 0 spots available
        </button>
        <div className="mt-2 text-sm">or</div>
        <div className="flex-col ">
          <Link
            to="https://cal.com/samuel-tetenga/devcook-intro-call"
            className="underline text-sm"
          >
            Book a call
          </Link>
        </div>
      </div>
      <p className="text-center text-sm text-[#7329e3] mt-4">
        Powered by stripe
      </p>
    </div>
  );
};

export default PricingCard;
