import React from 'react';

export const Button = ({ className, children, ...props }) => {
  return (
    <button 
      className={`px-4 py-2 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
