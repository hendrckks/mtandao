import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const Writing: React.FC<SVGProps> = (props) => (
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
      d="M20 17V5c0-1.121-.879-2-2-2s-2 .879-2 2v12l2 2l2-2zM16 7h4m-2 12H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6"
    ></path>
  </svg>
);
