import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowCursor2: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.005 5.428c.157-.065.257-.094.35-.186a.494.494 0 0 0 0-.7c-.093-.092-.124-.147-.35-.214C12.78 4.262 1.81.554 1.81.554A.99.99 0 0 0 .553 1.809S4.35 12.856 4.396 13.006c.046.15.106.257.199.35a.495.495 0 0 0 .7 0c.092-.093.113-.146.183-.35l1.94-5.594s5.431-1.919 5.587-1.984"
    ></path>
  </svg>
);
