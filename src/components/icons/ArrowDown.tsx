import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowDownRightSquare: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M15.813 15.813L8.187 8.187"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.845 16.111h6.238a1.028 1.028 0 0 0 1.028-1.028V8.845"
      ></path>
      <rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></rect>
    </g>
  </svg>
);
