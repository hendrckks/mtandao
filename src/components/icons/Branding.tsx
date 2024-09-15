import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const BrandStocktwits: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 3L8 7.5l8 4.5m-8 0l8 4.5L8 21"
    ></path>
  </svg>
);
