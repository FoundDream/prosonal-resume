import React from "react";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] container mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">Ziwen</h2>
      <div className="flex space-x-6 mt-4">
        <a
          href="https://github.com/FoundDream/"
          className="hover:text-gray-300"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};
