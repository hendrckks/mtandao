import React from 'react';

interface NavbarContextType {
  pricingRef: React.RefObject<HTMLDivElement> | null;
  updatePricingRef: (ref: React.RefObject<HTMLDivElement> | null) => void;
  scrollToPricing: () => void;
  shouldPerformSecondaryClick: boolean;
  setShouldPerformSecondaryClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = React.createContext<NavbarContextType>({
  pricingRef: null,
  updatePricingRef: () => {},
  scrollToPricing: () => {},
  shouldPerformSecondaryClick: false,
  setShouldPerformSecondaryClick: () => {},
});
