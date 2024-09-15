import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const FrameOutline: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      d="M3.5 0v15m8-15v15M0 3.5h15m-15 8h15"
    ></path>
  </svg>
);
