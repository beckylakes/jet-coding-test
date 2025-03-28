import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-x-0 top-[--header-height] justify-center">
      <div className="flex flex-col items-center pt-18">
        <div className="w-10 h-10 border-3 border-gray-300 border-t-4 border-t-amber-600 rounded-full animate-spin"></div>
        <p className="mt-2 text-lg font-medium text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;