
import React from 'react';

export const TigerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  // Icon representing "Made for kids": simple, fun blocks
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 4h8v8H4z" />
    <path d="M12 4h8v8h-8z" opacity="0.7" />
    <path d="M4 12h8v8H4z" opacity="0.7" />
    <path d="M12 12h8v8h-8z" />
  </svg>
);

export const BlocksIcon = (props: React.SVGProps<SVGSVGElement>) => (
  // Icon representing "Designed by Educators": logical sequence of blocks
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2 9h6v6H2z" fillOpacity="0.8" />
    <path d="M9 9h6v6H9z" />
    <path d="M16 9h6v6h-6z" fillOpacity="0.8" />
    <rect x="2" y="7" width="20" height="2" rx="1" opacity="0.5" />
  </svg>
);

export const ChartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  // Icon representing "Progress Report": a simple bar chart
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4 19h16v2H4z" opacity="0.3" />
    <path d="M7 10h3v8H7z" />
    <path d="M12 6h3v12h-3z" />
    <path d="M17 14h3v4h-3z" />
  </svg>
);
