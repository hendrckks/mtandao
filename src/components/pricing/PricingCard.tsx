import React from 'react';
import { Ticktick } from '../icons/Tick';
import { X } from '../icons/X';
import { Link } from 'react-router-dom';
import { useFirebaseAnalytics } from '../../context/useFirebaseAnalytics';

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
  monthlylink: string;
  quaterlylink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  icon,
  isQuarterly,
  monthlylink,
  quaterlylink,
}) => {
  const subscriptionLink = isQuarterly ? quaterlylink : monthlylink;
  const { logCustomEvent } = useFirebaseAnalytics();

  const handleSubscribeClick = () => {
    logCustomEvent('select_item', {
      item_list_name: 'Pricing Plans',
      item_name: title,
      item_variant: isQuarterly ? 'Quarterly' : 'Monthly',
    });
  };

  const handleBookCallClick = () => {
    logCustomEvent('generate_lead', {
      item_name: title,
      item_variant: isQuarterly ? 'Quarterly' : 'Monthly',
    });
  };

  return (
    <div className="bg-white text-[#131211] rounded-3xl font-medium shadow-lg p-8 flex flex-col h-full">
      <div className="items-center flex mb-4">
        <div className="bg-[#b8ff45] h-12 w-12 flex items-center justify-center rounded-full mr-3">
          {icon}
        </div>
        <h3 className="lg:text-xl text-lg font-medium text-[#131211]">
          {title}
        </h3>
      </div>
      <p className="lg:text-[42px] text-4xl font-medium mt-4 flex items-center mb-2">
        $<span>{price}</span>/
        <span className="text-2xl font-semibold">
          {isQuarterly ? 'mo' : 'mo'}
        </span>
      </p>
      <p className="text-sm py-6">{description}</p>
      <ul className="flex-grow mb-2">
        {features.map((feature, index) => (
          <li key={index} className="flex text-sm items-center py-2">
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
        <a
          href={subscriptionLink}
          onClick={handleSubscribeClick}
          className="block mt-4 bg-black w-full text-white text-sm py-2 px-4 rounded-lg transition-colors hover:bg-gray-800"
        >
          Subscribe
        </a>
        <div className="mt-2 text-sm">or</div>
        <Link
          to="https://cal.com/devscook/devscook-intro"
          onClick={handleBookCallClick}
          className="block mt-2 underline text-sm hover:text-gray-600"
        >
          Book a call
        </Link>
      </div>
      <p className="text-center lg:text-sm text-xs text-[#7329e3] mt-4">
        Powered by shopify
      </p>
    </div>
  );
};

export default PricingCard;
