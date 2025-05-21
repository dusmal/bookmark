import React from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Downloads from './sections/Downloads';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './layout/Footer';

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Hero />
        <Features />
        <Downloads />
        <Faq />
      </div>
      <div className="contact-wrapper">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;