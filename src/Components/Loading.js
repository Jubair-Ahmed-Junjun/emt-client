import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center h-screen">
      <progress className="progress progress-primary w-56 mt-8"></progress>
    </div>
  );
};

export default Loading;
