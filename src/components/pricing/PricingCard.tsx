import React from 'react';
import { Ticktick } from '../icons/Tick';
import { X } from '../icons/X';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: Feature[];
  icon: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon,
}) => {
  return (
    <div className="bg-white text-black rounded-3xl shadow-lg p-8 flex flex-col h-full">
      <div className="items-center mb-4 ">
        <div className="bg-[#b8ff45] h-12 w-12 flex items-center justify-center rounded-full mr-3">
          {icon}
        </div>
        <h3 className="text-xl mt-4 font-semibold text-black">{title}</h3>
      </div>
      <p className="text-base font-medium mb-2">Starts at ${price}</p>
      <p className="text-sm py-8">{description}</p>
      <ul className="flex-grow mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex text-base items-center py-2">
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
      <button className="mt-4 bg-black text-white text-sm py-2 px-4 rounded-full transition-colors">
        0 / 0 spots available
      </button>
      <p className="text-center text-sm text-[#7329e3] mt-2">
        Powered by stripe
      </p>
    </div>
  );
};

export default PricingCard;
