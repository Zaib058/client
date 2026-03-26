import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/asset/logo.jpg";

const CustomNavbar = () => {
  return (
    <nav className="bg-[#0b1f3a] text-white shadow-lg w-full">
      
      <div className="w-full flex items-center justify-between px-8 py-4">
        
        {/* Left: Logo + Title */}
        <Link to="/home" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="Logo" />
          <span className="text-2xl font-bold tracking-wide">
            Dr Aq Khan College
          </span>
        </Link>

        {/* Center: Menu */}
        <ul className="hidden md:flex space-x-10 font-semibold text-lg">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link to="/gallery_events" className="hover:text-yellow-400 transition">Gallery</Link></li>
          <li><Link to="/prospectus" className="hover:text-yellow-400 transition">Prospectus</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
          <li><Link to="/admissions" className="hover:text-yellow-400 transition">Admissions</Link></li>
          <li><Link to="/charter" className="hover:text-yellow-400 transition">Charter</Link></li>
        </ul>

        {/* Right: Login */}
        <Link to="/login">
          <button className="font-semibold border-2 border-yellow-400 text-yellow-400 px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition duration-300">
            Login
          </button>
        </Link>

      </div>
    </nav>
  );
};

export default CustomNavbar;