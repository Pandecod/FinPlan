import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Halaman
import Home from './pages/Home';
import FiturPage from './pages/FiturPage';
import Belajar from './pages/Belajar';
import DetailArtikel from './pages/DetailArtikel';
import NotFound from './pages/NotFound';
import 'animate.css';

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitur" element={<FiturPage />} />
        <Route path="/Belajar" element={<Belajar />} />
        <Route path="/artikel/:id" element={<DetailArtikel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
