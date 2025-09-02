import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';
import heroImg from '../assets/hero1.png';

export default function Belajar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-12 mt-20">
      {/* HERO */}
      <section id="hero" className=" bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            {/* Illustrative box */}
            <div className=" rounded-2xl p-6 animate__animated animate__fadeInUp animate__delay-1s">
              <img src={heroImg} alt="Ilustrasi keuangan" className="w-full h-64 md:h-full object-cover md:object-contain md:scale-110 md:translate-x-6" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl text-right md:text-4xl font-bold text-gray-800 animate__animated animate__fadeInUp animate__delay-1s">Belajar Finansial Itu Mudah</h1>
            <p className="mt-3 text-right  text-gray-600 animate__animated animate__fadeInUp animate__delay-2s">
              Temukan artikel edukasi keuangan mulai dari dasar, cara menabung, investasi hingga mengelola utang. Semua dikemas sederhana agar mudah dipahami
            </p>
          </div>
        </div>
      </section>

      {/* Grid Artikel */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <p className="text-sm text-blue-500 font-semibold mb-2">{article.category}</p>
            <h2 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h2>
            <p className="text-gray-600 leading-relaxed line-clamp-3">{article.content}</p>
            <Link to={`/artikel/${article.id}`} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
              Baca Selengkapnya →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
