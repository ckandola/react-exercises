import React from "react";

const CustomLink = ({ href, text, handleClick }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default CustomLink;
