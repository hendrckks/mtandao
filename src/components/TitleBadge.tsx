import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Diamond } from './icons/Diamond';

interface FlexibleBadgeProps {
  icon?: React.ElementType;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  onClick?: () => void;
}

const FlexibleBadge: React.FC<FlexibleBadgeProps> = ({
  icon: Icon = Diamond,
  text,
  className = '',
  iconClassName = '',
  textClassName = '',
  onClick,
}) => {
  return (
    <div
      className={twMerge(
        'bg-black flex w-fit text-sm items-center justify-center gap-2 rounded-full px-4 py-2',
        className
      )}
      onClick={onClick}
    >
      <Icon className={twMerge('text-[#b8ff45]', iconClassName)} />
      <h2 className={twMerge('text-[#b8ff45] font-medium', textClassName)}>
        {text}
      </h2>
    </div>
  );
};

export default FlexibleBadge;
