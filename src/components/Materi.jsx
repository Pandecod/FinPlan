import React, { useEffect, useState } from 'react';
import articles from '../data/articles';
import { Link } from 'react-router-dom';

const Materi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(3);
      else setCardsToShow(1);
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextMateri = () => setCurrentIndex((prev) => (prev + 1) % articles.length);
  const prevMateri = () => setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));

  return (
    <div className="container mx-auto   px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Materi">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center text-gray-800">
        Materi <span className="underline underline-offset-4 decoration-blue-500 font-light">Belajar</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-80 mx-auto">Pelajari materi keuangan secara bertahap</p>

      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={prevMateri} className="p-3 bg-white border border-gray-200 rounded shadow-sm hover:bg-blue-50 hover:text-blue-600 transition-colors" aria-label="Previous Materi">
          &larr;
        </button>
        <button onClick={nextMateri} className="p-3 bg-white border border-gray-200 rounded shadow-sm ml-2 hover:bg-blue-50 hover:text-blue-600 transition-colors" aria-label="Next Materi">
          &rarr;
        </button>
      </div>

      {/* slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {articles.map((article) => (
            <div key={article.id} className="relative flex-shrink-0 w-full sm:w-1/3">
              <div className="bg-white shadow-md rounded-lg p-6 h-60 flex flex-col justify-between border border-transparent hover:border-blue-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h2>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">{article.content}</p>
                  <Link to={`/artikel/${article.id}`} className="mt-4 inline-block text-blue-600 font-medium hover:underline">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materi;
