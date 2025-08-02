import React, { useState } from "react";
import { Link } from "react-router-dom"; // jika menggunakan React Router

const Navbar: React.FC = () => {
  const [] = useState()
  return (
    <nav className="w-full px-8 py-4 border-b border-gray-400/50 bg-gray-100 shadow-md flex justify-between items-center">
      {/* Logo atau Judul */}
      <div className="text-xl font-bold text-blue-700">
        <Link to="/">Robotics Community</Link>
      </div>

      {/* Menu Navigasi */}
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>
        </li>
        <li>
          <Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
