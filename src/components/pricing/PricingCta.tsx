import React from 'react';
import { Link } from 'react-router-dom';

interface AdditionalOptionProps {
  backgroundColor: 'black' | 'white';
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const AdditionalOption: React.FC<AdditionalOptionProps> = ({
  backgroundColor,
  icon,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  const isBlackBackground = backgroundColor === 'black';

  const cardClasses = `bg-${backgroundColor} rounded-3xl  h-full shadow-lg p-6 flex flex-col items-center text-center`;
  const titleClasses = `text-xl font-semibold mb-2 ${
    isBlackBackground ? 'text-white' : 'text-black'
  }`;
  const descriptionClasses = `${
    isBlackBackground ? 'text-gray-300' : 'text-gray-600'
  } mb-4 text-sm font-normal mt-6`;
  const buttonClasses = `mt-auto w-fit py-2 px-4 font-medium rounded-full text-sm transition-colors ${
    isBlackBackground
      ? 'bg-white text-black hover:bg-gray-200'
      : 'bg-black text-white hover:bg-gray-800'
  }`;

  return (
    <div className={cardClasses}>
      <div className="mb-4">{icon}</div>
      <h3 className={titleClasses}>{title}</h3>
      <p className={descriptionClasses}>{description}</p>
      <Link to={buttonLink} className={buttonClasses}>
        {buttonText}
      </Link>
    </div>
  );
};

export default AdditionalOption;
