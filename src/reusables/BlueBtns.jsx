import React from "react";

const BlueBtns = ({ text, className }) => {
  return (
    <button
      className={`bg-blue rounded-3xl py-3 px-5 border-sky-blue border-2 text-base font-medium cursor-pointer w-max ${className}
`}
    >
      {text}
    </button>
  );
};

export default BlueBtns;
