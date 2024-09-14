import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const CtaButton: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      className={twMerge(
        'py-3 px-7 bg-black rounded-full text-[14px] text-white shadow-custom-inset',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CtaButton;
