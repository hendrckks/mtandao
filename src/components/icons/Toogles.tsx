import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const ToggleOutline: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 15 15"
    {...props}
  >
    <g fill="none" stroke="currentColor">
      <path d="M3.5 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"></path>
      <path d="M11.5.5h-8a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6Zm0 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></path>
      <path d="M3.5 14.5h8a3 3 0 1 0 0-6h-8a3 3 0 0 0 0 6Z"></path>
    </g>
  </svg>
);
