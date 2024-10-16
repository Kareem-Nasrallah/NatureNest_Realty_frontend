import React from "react";

const Loading = () => {
  return (
    <div className="vh-100 bg-light d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
