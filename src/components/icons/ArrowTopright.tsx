import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowUpRightBoxOutline: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M269.236 123.636h-178.691A42.547 42.547 0 0 0 48 166.182v255.273A42.546 42.546 0 0 0 90.545 464h255.273A42.542 42.542 0 0 0 388.364 421.455V242.764M331.636 48H464v132.364M216 296l248-248"
    />
  </svg>
);

export default ArrowUpRightBoxOutline;
