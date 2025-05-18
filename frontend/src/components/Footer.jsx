import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-5">
      <p className="text-base font-medium">
        Made by:{" "}
        <a
          href="https://github.com/AndresAlbornozgil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-200 underline underline-offset-4 transition-colors duration-200"
        >
          Andres Albornoz
        </a>
      </p>
    </footer>
  );
};

export default Footer;
