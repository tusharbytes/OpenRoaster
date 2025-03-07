import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-100 z-50">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-full h-full bg-blue-500 opacity-20 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Loader;
