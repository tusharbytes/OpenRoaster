import React from 'react';

export default function Container({ children }) {
  return (
    <div className="container mx-auto p-4 bg-white  rounded-xl" >
      {children}
    </div>
  );
}
