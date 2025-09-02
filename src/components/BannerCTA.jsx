// BannerCTA.jsx
import React from 'react';
import heroImg from '../assets/hero2.png';

const BannerCTA = ({}) => {
  return (
    <section className="px-4">
      <div className="relative mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-xl overflow-hidden">
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%)]" />

        <div className="relative flex flex-col md:flex-row items-center">
          {/* Left: text */}
          <div className="w-full md:w-1/2 p-8 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Siap atur <span className="text-sky-300">keuanganmu</span>? <br /> Yuk mulai sekarang.
            </h2>
            <p className="mt-4 text-blue-100/90 text-base md:text-lg max-w-md">Bangun kebiasaan finansial sehat dengan langkah sederhana dan konsisten.</p>

            <div className="mt-6">
              <a href="#daftar" className="inline-block rounded-full bg-white px-6 py-3 text-blue-700 font-semibold shadow hover:bg-blue-50 active:bg-blue-100 transition transform hover:scale-105">
                Belajar Sekarang
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="w-full md:w-1/2 relative">
            <img src={heroImg} alt="Profesional tersenyum" className="w-full h-64 md:h-full object-cover md:object-contain md:scale-110 md:translate-x-6" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCTA;
