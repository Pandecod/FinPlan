'use client';

import React from 'react';
import { VelocityScroll } from './VelocityScroll';

// Data testimonial tentang edukasi finansial
const testimonials = [
  { id: 1, name: 'John Doe', text: 'Mencatat pengeluaran harian membuat saya lebih sadar ke mana uang saya pergi.' },
  { id: 2, name: 'Jane Smith', text: 'Dengan menabung rutin 20% dari gaji, saya akhirnya bisa membeli laptop impian.' },
  { id: 3, name: 'Michael Lee', text: 'Belajar investasi reksadana sejak dini membuat saya lebih percaya diri menghadapi risiko keuangan.' },
  { id: 4, name: 'Sarah Kim', text: 'Membuat anggaran bulanan sederhana membantu saya mengontrol pengeluaran tanpa stres.' },
  { id: 5, name: 'Kevin Hart', text: 'Mengurangi utang konsumtif memberi saya kebebasan finansial lebih cepat.' },
  { id: 6, name: 'Lisa Wong', text: 'Mempelajari perbedaan antara kebutuhan dan keinginan membuat saya lebih bijak menggunakan uang.' },
];

const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 bg-gray-50">
      {/* Judul section */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          Belajar
          <span className="underline underline-offset-4 decoration-blue-500 font-light"> Finansial</span>
        </h1>
        <p className="text-gray-600 mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Lihat bagaimana orang-orang mengatur keuangan mereka untuk mencapai tujuan finansial.
        </p>
      </div>

      {/* Row 1 (bergerak ke kanan) */}
      <VelocityScroll defaultVelocity={3} numRows={1} className="max-w-full mb-6" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
        {testimonials.map((t) => (
          <div key={t.id} className="inline-flex mx-3 w-72 max-w-xs bg-white p-6 rounded-xl shadow-lg text-black flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            {/* Text edukasi finansial */}
            <p className="italic text-gray-700 mb-3 line-clamp-4">"{t.text}"</p>
            <h4 className="font-semibold text-right">- {t.name}</h4>
          </div>
        ))}
      </VelocityScroll>

      {/* Row 2 (bergerak ke kiri) */}
      <VelocityScroll defaultVelocity={-3} numRows={1} className="max-w-full">
        {testimonials.map((t) => (
          <div key={t.id} className="inline-flex mx-3 w-72 max-w-xs bg-white p-6 rounded-xl shadow-lg text-black flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
            <p className="italic text-gray-700 mb-3 line-clamp-4">"{t.text}"</p>
            <h4 className="font-semibold text-right">- {t.name}</h4>
          </div>
        ))}
      </VelocityScroll>

      {/* Fade kiri-kanan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50"></div>
    </div>
  );
};

export default Testimonials;
