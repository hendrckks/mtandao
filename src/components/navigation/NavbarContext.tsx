// NavbarContext.tsx
import React from 'react';

interface NavbarContextType {
  sectionRefs: {
    pricing: React.RefObject<HTMLDivElement> | null;
    testimonials: React.RefObject<HTMLDivElement> | null;
    about: React.RefObject<HTMLDivElement> | null;
    faq: React.RefObject<HTMLDivElement> | null;
    portfolio: React.RefObject<HTMLDivElement> | null;
  };
  updateSectionRef: (
    section: 'pricing' | 'testimonials' | 'about' | 'faq' | 'portfolio',
    ref: React.RefObject<HTMLDivElement> | null
  ) => void;
  scrollToSection: (
    section: 'pricing' | 'testimonials' | 'about' | 'faq' | 'portfolio'
  ) => void;
  shouldPerformSecondaryClick: boolean;
  setShouldPerformSecondaryClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = React.createContext<NavbarContextType>({
  sectionRefs: {
    pricing: null,
    testimonials: null,
    about: null,
    faq: null,
    portfolio: null,
  },
  updateSectionRef: () => {},
  scrollToSection: () => {},
  shouldPerformSecondaryClick: false,
  setShouldPerformSecondaryClick: () => {},
});
