import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Disable scroll ketika mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  // Link style: biru jika active sama seperti hover
  const linkClass = ({ isActive }) => `cursor-pointer px-3 py-2 transition-colors duration-200 ${isActive ? 'text-blue-500 font-semibold' : 'text-gray-800 hover:text-blue-500'}`;

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-20">
          {/* Logo */}
          <div className="logo cursor-pointer">
            <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass}>
              Beranda
            </NavLink>
            <NavLink to="/fitur" className={linkClass}>
              Fitur
            </NavLink>
            <NavLink to="/belajar" className={linkClass}>
              Materi
            </NavLink>
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-700 rounded hover:bg-gray-200 transition text-2xl" onClick={() => setShowMobileMenu(true)}>
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Overlay gelap saat mobile menu terbuka */}
      {showMobileMenu && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setShowMobileMenu(false)} />}

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button onClick={() => setShowMobileMenu(false)} className="p-2 text-gray-700 rounded hover:bg-gray-200 transition text-2xl">
            <HiX />
          </button>
        </div>

        {/* Mobile links */}
        <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
          <NavLink to="/" onClick={() => setShowMobileMenu(false)} className={linkClass}>
            Beranda
          </NavLink>
          <NavLink to="/fitur" onClick={() => setShowMobileMenu(false)} className={linkClass}>
            Fitur
          </NavLink>
          <NavLink to="/belajar" onClick={() => setShowMobileMenu(false)} className={linkClass}>
            Materi
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
