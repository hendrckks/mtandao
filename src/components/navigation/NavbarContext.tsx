import React from 'react';

interface NavbarContextType {
  pricingRef?: React.RefObject<HTMLDivElement> | null;
  updatePricingRef?: (ref: React.RefObject<HTMLDivElement> | null) => void;
  scrollToPricing?: () => void;
  sectionRefs: {
    pricing: React.RefObject<HTMLDivElement> | null;
    testimonials: React.RefObject<HTMLDivElement> | null;
    about: React.RefObject<HTMLDivElement> | null;
    faq: React.RefObject<HTMLDivElement> | null;
  };
  updateSectionRef: (
    section: 'pricing' | 'testimonials' | 'about' | 'faq',
    ref: React.RefObject<HTMLDivElement> | null
  ) => void;
  scrollToSection: (
    section: 'pricing' | 'testimonials' | 'about' | 'faq'
  ) => void;
  shouldPerformSecondaryClick: boolean;
  setShouldPerformSecondaryClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = React.createContext<NavbarContextType>({
  pricingRef: null,
  updatePricingRef: () => {},
  scrollToPricing: () => {},
  sectionRefs: {
    pricing: null,
    testimonials: null,
    about: null,
    faq: null,
  },
  updateSectionRef: () => {},
  scrollToSection: () => {},
  shouldPerformSecondaryClick: false,
  setShouldPerformSecondaryClick: () => {},
});
