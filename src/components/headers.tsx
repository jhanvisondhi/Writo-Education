import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav>
        <ul className="flex justify-between">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;