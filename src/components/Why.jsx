import React from 'react';
import { BookOpen, Hourglass, PiggyBank } from 'lucide-react';

const Why = () => {
  const items = [
    {
      icon: <PiggyBank className="w-8 h-8 text-emerald-500" />,
      text: 'Banyak orang sulit nabung',
    },
    {
      icon: <Hourglass className="w-8 h-8 text-blue-500" />,
      text: 'Gaji habis sebelum akhir bulan',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-orange-600" />,
      text: 'Minim literasi keuangan',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      {/* Judul Section */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 " data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
          Kenapa <span className="underline underline-offset-4 decoration-blue-500 font-light">Penting?</span>
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Banyak orang menghadapi masalah finansial sehari-hari. Inilah beberapa alasan kenapa literasi keuangan itu penting untuk dipahami sejak dini.
        </p>
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center
                       transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 hover:scale-105"
          >
            {/* Icon dengan lingkaran background */}
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">{item.icon}</div>

            {/* Teks */}
            <p className="text-gray-700 text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
