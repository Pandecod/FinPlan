import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const linkClass = ({ isActive }) => `hover:text-sky-400 transition-colors duration-300 ${isActive ? 'text-white font-semibold' : 'text-blue-200'}`;

  return (
    <footer className="bg-blue-900 text-blue-100 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Tentang */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">FinPlan</h2>
            <p className="text-blue-200 text-sm sm:text-base leading-relaxed">Edukasi keuangan pribadi & tips budgeting untuk mahasiswa dan pekerja muda.</p>
          </div>

          {/* Navigasi */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Menu</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className={linkClass}>
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink to="/fitur" className={linkClass}>
                  Fitur
                </NavLink>
              </li>
              <li>
                <NavLink to="/belajar" className={linkClass}>
                  Belajar
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Berlangganan</h3>
            <p className="text-blue-200 text-sm">Dapatkan tips keuangan terbaru langsung ke email kamu.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Masukkan email" className="w-full sm:flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none" />
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">Kirim</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-6 text-center text-sm text-blue-300">© {new Date().getFullYear()} FinPlan. All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
