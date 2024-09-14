import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowRoundRight: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.25.5l2.5 2.5l-2.5 2.5"></path>
      <path d="M12.25 8.25A5.25 5.25 0 1 1 7 3h4.75"></path>
    </g>
  </svg>
);
