import React, { useState } from "react";

const links = [
  { href: "", label: "Home" },
  { href: "", label: "Work" },
  { href: "", label: "Services" },
  { href: "", label: "About" },
  { href: "", label: "Blog" },
  { href: "", label: "Contact" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black z-50 relative">
      <div className="py-4 px-6 md:px-10 flex justify-between items-center relative">
        {/* Title */}
        <h2 className="text-2xl">Create</h2>
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {/* Toggle between burger and close icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        {/* Menu items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 left-0 w-full bg-white text-black md:static md:flex md:space-x-6 md:w-auto md:bg-transparent md:text-left z-50`}
        >
          {/* Mobile menu items */}
          {links.map((link, index) => (
            <li key={index} className="p-4 border-b border-gray-300 md:border-none text-center">
              <a
                href={link.href}
                className="block text-black hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;