import React from "react";

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
            <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default Loader;
