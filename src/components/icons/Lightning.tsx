import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const Lightning: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <mask id="ipSLightning0">
      <path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M19 4h18L26 18h15L17 44l5-19H8L19 4Z"
      ></path>
    </mask>
    <path
      fill="currentColor"
      d="M0 0h48v48H0z"
      mask="url(#ipSLightning0)"
    ></path>
  </svg>
);
