import React from "react";

function Loading() {
  const blink = (text) => {
    setInterval(() => {
      return text;
    }, 1000);
  };
  return (
    <div className='="loading-cont'>
      <h3 className="loading-text">{blink("Loading...")}</h3>
    </div>
  );
}

export default Loading;
