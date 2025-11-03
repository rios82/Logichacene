
import React from 'react';

export const LogicIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="10" r="3"></circle>
    <line x1="12" y1="2" x2="12" y2="5"></line>
    <line x1="12" y1="19" x2="12" y2="22"></line>
  </svg>
);

export const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const AbcIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 16.5l4-11 4 11"></path>
    <line x1="5.5" y1="13.5" x2="10.5" y2="13.5"></line>
    <path d="M18 16.5a4 4 0 0 0-8 0"></path>
    <path d="M22 16.5a4 4 0 0 0-8 0"></path>
  </svg>
);

export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const PawIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22C12 22 6 18 6 12S12 2 12 2s6 4 6 10-6 10-6 10z"></path>
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
    <path d="M12 14v8"></path>
    <path d="M12 2v-1"></path>
    <path d="M8 12H2"></path>
    <path d="M16 12h6"></path>
  </svg>
);

export const PaintBrushIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.5 2.5a2 2 0 0 1 2 2L6 15l-4 4 1.5 1.5L8 16l10-10"></path>
    <path d="M16 12.5L20 8"></path>
  </svg>
);
