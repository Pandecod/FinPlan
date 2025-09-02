'use client';

import React from 'react';
import { VelocityScroll } from './VelocityScroll';

const brandMessages = [
  { id: 1, text: 'Atur Uangmu' },
  { id: 2, text: 'Capai Tujuan' },
  { id: 3, text: 'Belajar Finansial' },
  { id: 4, text: 'Masa Depan Cerah' },
];

const BrandScroller = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16">
      <VelocityScroll defaultVelocity={3} numRows={1} className="max-w-full">
        {brandMessages.map((msg) => (
          <span key={msg.id} className="inline-block mx-8 text-xl font-bold text-black">
            {msg.text}
          </span>
        ))}
      </VelocityScroll>

      {/* Fade kiri-kanan */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
    </div>
  );
};

export default BrandScroller;
