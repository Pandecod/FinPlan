// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import BrandScroller from '../components/BrandScroller';
import Why from '../components/Why';
import BannerCTA from '../components/BannerCTA';
import Testimonials from '../components/Testimonials';
import Materi from '../components/Materi';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <BrandScroller />
      <Why />
      <Materi />
      <BannerCTA />
      <Testimonials />
      {/* <Projects /> */}
      <Footer />
    </div>
  );
};

export default Home;
