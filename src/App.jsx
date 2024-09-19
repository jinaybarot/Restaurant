import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Services from './components/Services';

const App = () => {
  return (
    <>
    <div> <Navbar /></div>
    <div> <Hero /></div>
    <div> <Features /></div>
    <div> <Pricing /></div> 
    <div> <Testimonials /></div>
    <div> <Services /></div>
    <div> <Footer /></div>
    </>
  );
};

export default App;
