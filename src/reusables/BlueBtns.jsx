import React from "react";

const BlueBtns = ({ text, className }) => {
  return (
    <button
      className={`bg - blue rounded-2xl py-1.5 px-3 ${className}
`}
    >
      {text}
    </button>
  );
};

export default BlueBtns;
