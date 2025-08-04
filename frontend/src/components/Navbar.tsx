import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // jika menggunakan React Router

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  const robotLogo = import.meta.env.VITE_LOGO_URL || "/assets/robot.png"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full px-8 py-4.5 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo atau Judul */}
      <div className="text-xl font-bold text-blue-700">
        <div className="flex items-center space-x-2.5">
          <img
            src={robotLogo}
            alt="Logo"
            className="absolute left-2.5 h-15 w-auto"
            />
        <Link to="/" className="mx-11">Robotics Community</Link>
        </div>
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
