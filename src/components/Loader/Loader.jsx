import React from "react";

const Loader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex space-x-2 justify-center items-center bg-black p-6 rounded-lg shadow-lg">
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.3s]  ease-in-out"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce [animation-delay:-0.15s] ease-in-out"></div>
        <div className="h-8 w-8 bg-white rounded-full animate-bounce ease-in-out "></div>
      </div>
    </div>
  );
};

export default Loader;
