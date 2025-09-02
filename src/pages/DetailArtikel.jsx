import React from 'react';
import { useParams, Link } from 'react-router-dom';
import articles from '../data/articles';

export default function DetailArtikel() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p className="text-center mt-10">Artikel tidak ditemukan.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b mt-20 from-blue-50 to-white px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow animate__animated animate__fadeInUp animate__delay-1s">
        <p className="text-sm text-blue-500 font-semibold mb-2">{article.category}</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
        <p className="text-gray-600 leading-relaxed">{article.content}</p>
        <Link to="/" className="inline-block mt-6 text-blue-600 hover:underline font-medium">
          ← Kembali
        </Link>
      </div>
    </div>
  );
}
