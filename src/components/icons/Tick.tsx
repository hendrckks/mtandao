import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {}

export const Ticktick: React.FC<SVGProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12s12-5.383 12-12h-2.7c0 5.128-4.172 9.3-9.3 9.3c-5.128 0-9.3-4.172-9.3-9.3c0-5.128 4.172-9.3 9.3-9.3zm7.4 2.583l-7.505 9.371L8.388 9.08l-2.002 2.436l4.741 3.888a1.573 1.573 0 0 0 2.231-.233l8.504-10.617z"
    ></path>
  </svg>
);
