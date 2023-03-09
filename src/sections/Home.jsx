import React from 'react';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import '../styles/sections/Home.css';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
    </div>
  );
}
