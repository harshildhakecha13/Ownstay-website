import React from 'react';

interface OwnstayLogoProps {
  size?: number | string;
  className?: string;
  color?: string;
}

export default function OwnstayLogo({
  size = 32,
  className = '',
  color = '#F95A1E',
}: OwnstayLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Ownstay Logo"
    >
      {/* Left Wing / Door Panel */}
      <path
        d="M 18 16 
           C 18 11.5, 21.5 8.5, 25.5 10.8 
           L 41.5 20.4 
           C 44.5 22.2, 45 24.5, 45 27 
           L 45 73 
           C 45 75.5, 44.5 77.8, 41.5 79.6 
           L 25.5 89.2 
           C 21.5 91.5, 18 88.5, 18 84 
           Z"
        fill={color}
      />
      {/* Right Wing / Door Panel */}
      <path
        d="M 82 16 
           C 82 11.5, 78.5 8.5, 74.5 10.8 
           L 58.5 20.4 
           C 55.5 22.2, 55 24.5, 55 27 
           L 55 73 
           C 55 75.5, 55.5 77.8, 58.5 79.6 
           L 74.5 89.2 
           C 78.5 91.5, 82 88.5, 82 84 
           Z"
        fill={color}
      />
    </svg>
  );
}
