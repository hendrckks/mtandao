import React from 'react';

interface TestimonialCardProps {
  author: string;
  role: string;
  quote: string;
  imageUrl: string;
  isSmall?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  role,
  quote,
  imageUrl,
  isSmall = false,
}) => {
  return (
    <div
      className={`bg-[#f2f2f2] p-6 ${
        isSmall ? 'rounded-md h-72' : 'rounded-lg md:h-full lg:h-80'
      } shadow-lg flex flex-col justify-between mb-5 border border-[#d8d9ec]`}
    >
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={author}
          className={`${isSmall ? 'w-11 h-11' : 'w-14 h-14'} rounded-full mr-3`}
        />
        <p
          className={`text-gray-800 italic ${
            isSmall
              ? 'text-base font-medium font-neue-regrade p-4 h-auto'
              : 'md:text-lg text-base font-neue-regrade p-6'
          }`}
        >
          "{quote}"
        </p>
      </div>
      <div className="flex items-center mt-6">
        <div className="font-neue-regrade">
          <p
            className={`font-semibold text-gray-900 ${
              isSmall ? 'text-sm' : 'text-base'
            }`}
          >
            {author}
          </p>
          <p className={`text-gray-600 ${isSmall ? 'text-xs' : 'text-sm'}`}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
