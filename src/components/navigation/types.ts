import { ElementType } from 'react';

export interface TooltipLinkProps {
  to: string;
  icon: ElementType;
  tooltip: string;
  noActiveBackground?: boolean;
}
export interface NavitemProps {
  label: string;
  icon: ElementType;
  href: string;
}
